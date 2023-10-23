// N 字形变换

// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
// P   A   H   N
// A P L S I I G
// Y   I   R

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function (s, numRows) {
//   if (numRows == 1) return s;
//   let table = new Array(numRows).fill().map((e) => {
//     return new Array(s.length).fill("");
//   });
//   let row = 0;
//   let column = 0;
//   let flag = false;
//   for (let i = 0; i < s.length; i++) {
//     table[row][column] = s[i];

//     if (row % numRows == 0 || (row + 1) % numRows == 0) {
//       flag = !flag;
//     }
//     if (flag) {
//       row++;
//     } else {
//       column++;
//       row--;
//     }
//   }

//   let a = table.reduce((a, b) => {
//     return a.concat(b).filter(function (s) {
//       return s && s.trim();
//     });
//   });
//   console.log(a.join(""));
//   return a.join("");
// };

var convert = function (s, numRows) {
  if (numRows == 1) return s;
  let table = new Array(numRows).fill().map((e) => {
    return [];
  });
  let row = 0;
  let column = 0;
  let flag = false;
  for (let i = 0; i < s.length; i++) {
    table[row].push(s[i]);

    if (row % numRows == 0 || (row + 1) % numRows == 0) {
      flag = !flag;
    }
    if (flag) {
      row++;
    } else {
      column++;
      row--;
    }
  }
  let a = table.reduce((a, b) => {
    return a.concat(b);
  });
  console.log(a.join(""));
  return a.join("");
};

let string = "qwrqwfqrqwrqweqweqw";
convert(string, 2);
