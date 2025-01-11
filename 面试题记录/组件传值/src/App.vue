<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
const iconv = require("iconv-lite");

// 将 GBK 编码的字符串转换为 UTF-8 编码的字符串
function gbkToUtf8(gbkStr) {
  return iconv.decode(Buffer.from(gbkStr, "binary"), "gbk");
}

// 将 UTF-8 编码的字符串转换为 GBK 编码的字符串
function utf8ToGbk(utf8Str) {
  return iconv.encode(utf8Str, "gbk").toString("binary");
}

// 测试
const gbkStr =
  'k申N夂錮躊蠜5"昵Ji钉反oS劃凑??蘭XJVw粅WQ脁?Y&[麎5^IS籫O?m6萘[偣濂??E<[！"';
const utf8Str =
  'k申N夂錮躊蠜5"昵Ji钉反oS劃凑??蘭XJVw粅WQ脁?Y&[麎5^IS籫O?m6萘[偣濂??E<[！"';
console.log(gbkToUtf8(gbkToUtf8(gbkToUtf8(gbkStr)))); // 输出：你好，世界！
console.log(utf8ToGbk(utf8Str)); // 输出：你好，世界！的 GBK 编码字符串
export default {
  name: "App",
};
</script>
<style scoped>
#app {
  width: 1920px;
  height: 1080px;
  /* height: 100vh;
  width: 100vw; */
}
</style>
