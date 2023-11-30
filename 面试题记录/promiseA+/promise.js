const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    let resolve = (value) => {
      if (this.status == PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    let reject = (reason) => {
      if (this.status == PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    // 立即执行
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }

    this.then = (onFulfilled, onRejected) => {
      if (this.status == PENDING) {
        this.onResolvedCallbacks.push(() => onFulfilled(this.value));
        this.onRejectedCallbacks.push(() => onRejected(this.reason));
      }
      if (this.status == FULFILLED) {
        onFulfilled(this.value);
      }
      if (this.status == REJECTED) {
        onRejected(this.reason);
      }
    };
  }
}
