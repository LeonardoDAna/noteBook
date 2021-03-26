const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(executor) {
  let _this = this
  _this.status = PENDING
  _this.data = undefined
  _this.onResolvedCallback = []
  _this.onRejectedCallback = []

  function resolve(value) {
    if (_this.status === 'pending') {
      _this.status = FULFILLED
      _this.data = value
      for (let i = 0; i < _this.onResolvedCallback.length; i++) {
        _this.onResolvedCallback[i](value)
      }
    }
  }

  function reject(reason) {
    if (_this.status === 'pending') {
      _this.status = REJECTED
      _this.data = reason
      for (let i = 0; i < _this.onRejectedCallback.length; i++) {
        _this.onRejectedCallback[i](reason)
      }
    }
  }
  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

// then 链式调用

Promise.prototype.then = function (onFulfilled, onRejected) {
  let _this = this
  let promise2

  // 根据规范，如果then的参数不是function，则需要忽略它
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
  onRejected = typeof onRejected === 'function' ? onRejected : reason => {
    throw reason
  }
  if (_this.status == 'fulfilled') {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        let x = onFulfilled(_this.data)
        if (x instanceof Promise) {
          x.then(resolve.reject)
        }
        reject(x)
      } catch (e) {
        reject(e)
      }
    })
  }
  if (_this.status == 'rejected') {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        let x = onRejected(_this.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        }
        resolve(x)
      } catch (e) {
        reject(e)
      }
    })
  }
  if (_this.status == 'pending') {
    return promise2 = new Promise(function (resolve, reject) {
      _this.onResolvedCallback.push(function (value) {
        try {
          let x = onFulfilled(_this.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
      _this.onRejectedCallback.push(function (reason) {
        try {
          let x = onRejected(_this.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}
module.exports = Promise;
// export default Promise