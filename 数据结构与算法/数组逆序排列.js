
// 将一个一维数组中的 N 个元素逆序存放到原数组中

let aArr = Array(17).fill().map((e, index) => {
  return index + 1
})

function invertedSequence(arr) {
  for (let i = 0; i <= parseInt(arr.length / 2); i++) {
    let test = arr[i]
    arr[i] = arr[arr.length - (1 + i)]
    arr[arr.length - (1 + i)] = test
  }
}

invertedSequence(aArr)
console.log(aArr);