# 2021 03 01

## `get` 和 `post` 的区别

最直观的区别就是 `get` 参数放在 `URL` 里, `post` 请求的参数放在 `request body`里

## `get` url 的最长多少

    256个字节

## post 请求体 body 的最大是多少

    post 请求体理论上来讲是没有限制的  在本地tomcat上限制大小为2M

## cors 攻击

Cross Origin Resource Sharing（跨源资源共享）

## http 协议和 tcp/ip 协议的区别

    tcp/ip 三次握手完成传输信息
    http 协议是建立在TCP协议之上的一种应用
    四次挥手

## http 协议和 Https 协议的区别

Http 协议运行在 TCP 之上，明文传输，客户端与服务器端都无法验证对方的身份；
Https 是身披 SSL(Secure Socket Layer)外壳的 Http，运行于 SSL 上，SSL 运行于 TCP 之上，是添加了加密和认证机制的 HTTP。
二者之间存在如下不同：
端口不同：Http 与 Http 使用不同的连接方式，用的端口也不一样，前者是 80，后者是 443；
资源消耗：和 HTTP 通信相比，Https 通信会由于加减密处理消耗更多的 CPU 和内存资源；
开销：Https 通信需要证书，而证书一般需要向认证机构购买；

## 数组和链表的区别

数组

- 以电影院位置作比喻
- 数组在内存中好比电影院连坐的一块区域
- 插入和删除的效率底下
- 随机读取效率很高
- 不利于扩展

链表

- 在内存中可以存在任何地方
- 每一个数据都保存了下一个数据的内存地址,通过这个地址找到下一个地址
- 增加数据和删除数据很方便
- 查找时效率低,因为不具备随机访问性
- 不指定大小,扩展方便

## 数组和 `map` 的区别

<!--

    -->

## `map` 可以有重复的键吗

    不可以

## 小程序 测试版不重新发包的情况下如何切换版本

<!--  -->

## cookie sessionstroage localstroage 的区别

- `localStroage` 储存在本地，除非主动清理`localStroage`里面的信息，否则会一直存在。存放数据大小为一般为 5MB,而且它仅在客户端（即浏览器）中保存，不参与和服务器的通信。
- `sessionStroage` 它和 `localStroage` 相似，不同在 `sessionStroage` 会在当前浏览器页面关闭时清除。`sessionStorage` 仅在当前会话下有效，关闭页面或浏览器后被清除。存放数据大小为一般为 5MB,而且它仅在客户端（即浏览器）中保存，不参与和服务器的通信。
- `cookie` 是服务端发给客户端的特殊信息，`cookie` 是以文本的形式存储在客户端的，每次和服务端通信都会带上它。单个`cookie`保存的数据不能超过 4kb。`cookie` 的作用是 :
  - （1）判断用户是否登陆过网站，以便下次登录时能够实现自动登录（或者记住密码）。如果我们删除 `cookie` ，则每次登录必须从新填写登录的相关信息。
  - （2）保存上次登录的时间等信息。
  - （3）保存上次查看的页面
  - （4）浏览计数

## 对接口的安全措施

- CSRF / XSRF（跨站请求伪造）
  - 解决方案 1、利用 cookie 的 sameSite，添加 sameSite=Strict 只有在请求站点地址和资源地址相同时才会带上 cookie
  - 解决方案 2、服务器生产一个 CSRF_TOKEN 植入到页面里，每次调用接口的时候将 CSRF_TOKEN 和 用户 TOKEN 一起传给后端
- XSS/CSS（跨站脚本攻击 Cross Site Scripting）
  ```
    XSS 攻击是指黑客往 HTML 文件中或者 DOM 中注入恶意脚本，从而在用户浏览页面时利用注入的恶意脚本对用户实施攻击的一种手段。
  ```
  - 解决方案 1、服务器对输入脚本进行过滤或转码（SQL 脚本注入）
  -

## `Vue`的双向绑定原理，虚拟`dom`是什么，如果让你写一个双向绑定的东西你会怎么写

- vue2 的双向数据绑定 主要采用：数据劫持加`发布者订阅者`模式的方法,通过 object.defineProperty 的 get 和 set ，在数据变动的时候发布消息给订阅者触发监听.缺点：
  - 不能监听数组的变化
  - 必须遍历对象的每个属性
  - 必须深层遍历嵌套的对象
  - 解决方案：使用 this.$set(obj,key,value)进行更新
- vue3 则使用 Proxy 解决了 object.definePropert 不能监听到数据属性修改和数组操作的问题。

```html
<body>
  <input id="inputBox" type="text" value="" />
  <p id="pBox"></p>
</body>
<script>
  let a = new Object();
  Object.defineProperty(a, "propertyname", {
    get: function () {
      return a;
    },
    set: function (newValue) {
      document.getElementById("inputBox").value = newValue;
      document.getElementById("pBox").innerHTML = newValue;
    },
  });
  document.getElementById("inputBox").onkeyup = function (e) {
    a.propertyname = e.target.value;
  };
  function timeFn() {
    setTimeout(() => {
      a.propertyname = "8888";
    }, 3000);
  }
  timeFn();
</script>
```

vdom 是虚拟 DOM(Virtual DOM)的简称，指的是用 JS 模拟的 DOM 结构，将 DOM 变化的对比放在 JS 层来做。换而言之，vdom 就是 JS 对象。

比如在一个 table 里面有很多数据，每次改动之后，table 标签都得重新创建、渲染，我们不希望这种事情发生，因为 DOM 重绘很消耗浏览器性能。

因此我们采用 JS 对象模拟的方法，将 DOM 的比对操作放在 JS 层，减少浏览器不必要的重绘，提高效率。

1. vue2 diff

   - 新的头和老的头对比
   - 新的尾和老的尾对比
   - 新的头和老的尾对比
   - 新的尾和老的头对比

2. vue3 diff

   - 事件缓存：将事件缓存，可以理解为变成静态的了
   - 添加静态标记：Vue2 是全量 Diff，Vue3 是静态标记 + 非全量 Diff
   - 静态提升：创建静态节点时保存，后续直接复用
   - 使用最长递增子序列优化了对比流程：Vue2 里在 updateChildren() 函数里对比变更，在 Vue3 里这一块的逻辑主要在 patchKeyedChildren() 函数里，具体看下面

## 箭头函数和普通函数的区别

箭头函数相比普通函数会更加简洁比如：

- 箭头函数省去了 `funciton` 关键词
- 箭头函数如果只有一个参数可以省去包括函数的括号
- 箭头函数的函数体如果只有一行代码也可以省去包括函数体的括号
- 箭头函数的函数体只有一条语句且没有返回值可以在这个语句前面加一个 `void`
- 箭头函数不会创建自己的 this（箭头函数的 this 指向在被定义的时候就已经确定了，之后永远不会改变）
- `.call()`/`.apply()`/`.bind()`无法改变箭头函数的 this 指向

## 发布者订阅者的设计模式

## this 的指向

this 永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的

## 原型链 微任务宏任务

原型

- 每个对象都有一个`__proto__`属性，并且指向它的`prototype`原型对象
- 每个构造函数都有一个`prototype`原型对象
- `prototype`原型对象里的`constructor`指向构造函数本身

原型链

- 当你查找对象的某一个属性，在对象本身没有找到就会在原型对象去找，原型对象又具有自己的原型对象，这样一直查找下去，直到找到匹配的属性或者达到原型链的末尾为止

## 继承

属性的继承是通过在一个类内执行另外一个类的构造函数，通过 call 指定 this 为当前执行环境，这样就可以得到另外一个类的所有属性。

## js 写一个方法实现简单的深拷贝

在了解深浅拷贝之前，先了解一下 js 的基本类型和引用类型
基本类型

- boolean
- string
- number
- null
- undefined

引用类型

- object
- function
- array

基本类型的数据都存放在栈里面

引用类型由于大小不固定，系统将储存该引用类型的地址存栈中，并赋值给变量本身，而具体的数据存在堆中。

当基本类型复制给另一个变量时，系统会在栈中开辟一个新的空间，赋予相同的值，这样两个变量就相互独立。

当引用类型，新的变量复制的是在栈中指向原数据的地址，所以当原数据发生改变的时候新变量的值也会发生变化

```js
// 浅拷贝
function shallowCopy(target,source){
    if(!target || typeOf target !== 'object') return
    if(!source || typeOf source !== 'object') return
    for(let key in source){
        if(source.hasOwnProperty(key)){
            target[key] = source[key]
        }
    }
}

// 深拷贝
function deepCopy(target,source){
    if(!target || typeOf target !== 'object') return
    if(!source || typeOf source !== 'object') return
    for(let key in source){
        if(source.hasOwnProperty(key)){
            if(source[key] && typeOf source == 'object'){
                target[key] = Array.isArray(source[key])?[]:{}
                deepCopy(target[key],source[key])
            }else{
            target[key] = source[key]
            }
        }
    }
}
```

## 怎么画一条 0.5px 的线

```css
.halfBorder {
  border: 1px solid black;
  tranform: scale(0.5, 0.5);
}
```

## 两个数组合并之后去重

```js
let concatArr = a.concat(b);

function unqi(arr) {
  let hashMap = new Map();
  let requestArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (hashMap.has(arr[i])) {
      hashMap.set(arr[i], true);
    } else {
      hashMap.set(arr[i], false);
      requestArr.push(arr[i]);
    }
  }
  return requestArr;
}
console.log(unqi(concatArr));
```

## `set` `map` `weakset` `weakmap` 的区别

set 类似于数组，但是值都是唯一且无序的，没有重复的值。set 本身是一种构造函数，用来生成 set 数据结构。set 对象允许存储任意类型的数据。

weakset 只能存储弱引用对象，即 js 垃圾回收机制不考虑 weakset 对该对象的应用，如果没有其他的变量引用的话，则这个对象就会被垃圾回收机制回收掉

map 是一组键值对的结构，类似对象，但是键可以是任意类型且不能重复，可以遍历。

weakmap 只接受对象作为键名（null 除外），不能遍历，键名对象没有被引用就会被垃圾回收掉

## 用`reduce`对对象数组去重

reduce 实质上是一个累计器函数，通过用户自定义的累计器对数组成员进行自定义累计，得出一个由累计器生成的值。另外 reduce 还有一个胞弟 reduceRight，两个方法的功能其实是一样的，只不过 reduce 是升序执行，reduceRight 是降序执行。

```js
function Uniq(arr = []) {
  return arr.reduce((t, v) => (t.includes(v) ? t : [...t, v]), []);
}
const arr = [2, 1, 0, 3, 2, 1, 2];
Uniq(arr); // [2, 1, 0, 3]
```

## 数组的`map` , `filter` , `foreach` , `every` , `some` ,`reduce`方法

## 判断一个变量的数据类型是什么怎么判断

- Object.prototype.toString.call()

  ```js
  Object.prototype.toString.call("string"); // "[Object String]"
  Object.prototype.toString.call(true); // "[Object Boolean]"
  Object.prototype.toString.call(() => {}); // "[Object Function]"
  ```

- typeof

  ```js
  typeof "string"; // "string"
  typeof true; // "boolean"
  typeof 2021; // "number"
  typeof []; // "object"
  // 只能判断基本类型 判断不了对象的类型（array,function）
  // 也判断不了 null
  ```

- instanceof

  ```js
  [] instanceof Array; // true

  let Afn = () => {};
  Afn instanceof Function; // true
  let a = null,
    b;
  a instanceof null; // Right-hand side of 'instanceof' is not an object
  b instanceof undefined; // Right-hand side of 'instanceof' is not an object
  // 不能判断 undefined 和 null
  ```

- constructor
  - 不能判断 undefined 和 null

## `instanceof`和`typeof`区别以及各自优劣

typeof 用来区分 undefined,number,boolean,string,funciton,object

instanceof 用来区分一个 object 属于什么类（）

instanceof 运算符是用来测试一个对象是否在其原型链原型构造函数的属性。其语法是 object instanceof constructor

## NaN

```js
let a = NaN;
typeof a; // 'number'
a == NaN; // false
isNaN(a); // true
```

请使用 isNaN() 来判断一个值是否是数字。原因是 NaN 与所有值都不相等，包括它自己。

## 怎么判断对象为空？

```js
//  采用 for…in…进行遍历
function isEmptyObj(obj) {
  for (let item in obj) {
    return true;
  }
  return false;
}
console.log(isEmptyObj({}));

// ES6中新增的Object.keys()
function isEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    return false;
  }
  return true;
}
console.log(isEmpty({}));
```

## `==`和`===`的区别

`==`会有类型转换 `===` 必须要类型相同和值相同才会返回 ture

## 用 es5 的语法去重[1,1,'a','a',NaN,NaN]

## `script`标签中的 defer 和 asycn 的区别

async：他是异步加载，不确定何时会加载好；页面加载时，带有 async 的脚本也同时加载，加载好后会立即执行，如果有一些需要操作 DOM 的脚本加载比较慢时，这样会造成 DOM 还没有加载好，脚本就进行操作，会造成错误。

defer：页面加载时，带有 defer 的脚本也同时加载，加载后会等待 页面加载好后，才执行。

## link 和 @import 的区别

link

- 是 html 标签 不会有兼容性问题
- link 会和 html 同时加载
- link 方式的权重高于@import 的权重

@import

- 是 css 的语法，只有导入样式表的作用
- @import 引入的 css 在 html 加载完毕后被加载
- @import 是依赖 css 的 存在一定的兼容问题

## 谈谈对 BFC 的理解

BFC 的触发条件：

- float 元素
- position： absolute/fiexd
- display: inline-block/table-cells
- overflow: 除了 visible 以外的所有值

BFC 的特性：

- 属于同一个 BFC 的两个相邻的 Box 边距会被折叠
- 属于同一个 BFC 的两个相邻 Box 垂直排列
- BFC 的区域不会和 float 的元素区域重叠
- 文字层不会被浮动层覆盖，环绕于周围

## 图片的懒加载和预加载

懒加载：有利于性能优化，减轻服务器的压力，提升用户体验。

懒加载的技术实现：首先将页面上的图片的 src 设为空，把图片的真实路径存放起来，当页面滚动时监听 scroll 事件，在 scroll 事件的回调中，判断懒加载的图片是否进入了可视范围了，这时候把真实的图片地址放到图片的 src 中，这样就实现了懒加载。

预加载：在网页全部加载之前，对一些主要内容进行加载，以提供给用户更好的体验，减少等待的时间。否则，如果一个页面的内容过于庞大，没有使用预加载技术的页面就会长时间的展现为一片空白，直到所有内容加载完毕。

预加载和懒加载相反，一个是提前执行，一个延迟执行。一个为服务器减少压力，一个则会增加服务器压力

## ES6 模块和 CommonJS 模块的区别

ES6 导出/入模块方式：

```js
// 导出
function fn(a){
  console.log(a)
}
export default fn

// 导入
import fn from ***.js
fn()
```

CommonJS 导出/入模块方式：

```js
// 导出
function fn(a){
  console.log(a)
}
module exports = {
  fn
}

// 导入
const BModule = require('./B.js')
BModule.fn()

```

这两者的主要区别主要有以下两点：

- 对于模块的依赖，CommonJS 是动态的，ES6 Module 是静态的
- CommonJS 导入的是值的拷贝，ES6 Module 导入的是值的引用

## 对 Http 缓存的理解

- HTTP 缓存主要分强制缓存和对比缓存
- 强制缓存的 HTTP 相关头部 Cache-Control，Expires（HTTP1.0）,浏览器直接读本地缓存，不会再跟服务器端交互，状态码 200。强制缓存会根据缓存规则判断缓存是否失效，失效则使用对比缓存。
- 对比缓存的 HTTP-相关头部 Last-Modified / If-Modified-Since， Etag / If-None-Match (优先级比 Last-Modified / If-Modified-Since 高)，每次请求需要让服务器判断一下资源是否更新过，从而决定浏览器是否使用缓存，如果是，则返回 304，否则重新完整响应。

## async/await 和 promise 的各自优劣

async/await

- 让你的代码看起来是同步的（可读性更强），但实际还是异步的
- async 要在代码里处理异常

promise

- 链式处理 可以自己处理异常
- promise.all/promise.race 并行处理异步

## Babel 的原理

Babel 能够转译`es2015+`的代码，让代码可以在版本较低的浏览器或者环境中可以正常运行

Bebal 转译的过程可以分成三部分 代码解析 代码转换 代码生成

## 实现一个 instanceof 方法

## 网络安全风险有哪些

## promise 等待多个异步请求并行执行后，将获取的数据统一处理（promise.all）

## 什么时候用箭头函数

## 怎么修改 this 指向

bind ,apply,call

## bind , apply ,call 各自有什么区别

## 有没有改过 webpack 的配置

## Nuxt 和 vue 有什么区别

## 服务端渲染和客户端渲染的区别优劣

服务器端渲染的话，首先，前端耗时少。因为后端拼接完了 html，浏览器只需要直接渲染出来。

其次，有利于 SEO。无需占用客户端资源。即解析模板的工作完全交由后端来做，客户端只要解析标准的 html 页面即可，这样对于客户端的资源占用更少，尤其是移动端，也可以更省电。

后端生成静态化文件。

但是另一方面来讲的话，服务器端渲染不利于前后端分离，开发效率低。使用服务器端渲染，则无法进行分工合作，则对于前端复杂度高的项目，不利于项目高效开发。

## vue 服务端渲染的原理

## 单页面和多页面的区别

## 单页面如何解决首页加载慢的问题

图片优化

路由懒加载

webpack 打包优化

按需引入

## js 里面的 this 是什么

## 说一说 js 的作用域链

## promise.all 的底层逻辑

## 为什么用 const 声明了一个对象，还可以改变该对象的值

## 解决跨域问题的方法有哪些

## 重绘和回流分别是什么概念？有什么不同？什么时候会出现重绘和回流现象？怎么尽量避免？

- repaint(重绘)：屏幕的一部分重画，不影响整体布局，比如某个 CSS 的背景色变了，但元素的几何尺寸和位置不变。

- reflow(回流)：意味着元件的几何尺寸变了，我们需要重新验证并计算渲染树。是渲染树的一部分或全部发生了变化。这就是 Reflow，或是 Layout。

## mvvm 的理解

## 什么是响应式布局？怎么实现？

## 怎么清除浮动？

在浮动元素下新增一个空的 div 样式 clear:both

```css
floatDiv {
  clear: both;
}
// 添加无意义标签 语义化差
```

伪元素清除浮动 (推荐使用)

```css
floatBox::after {
  content: "";
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
}
```

BFC 清除浮动

```css
floatBox {
  overflow: hidden;
}

// 内容增多的时候超过盒子大小会导致内容被隐藏
```

## 怎么判断回文的方法

## 浏览器到输入网址回车到渲染发生什么

1.  URL 解析 DNS 解析
2.  TCP 连接
3.  发送 HTTP 请求
4.  服务器处理请求并返回 HTTP 报文
5.  浏览器解析渲染页面
6.  连接结束

7.  用户输入阶段：
    合成 URL：浏览区会判断用户输入是合法 URL，比如用户输入的是搜索的关键词，默认的搜索引擎会合成新的，如果符合 url 规则会根据 url 协议，在这段内容加上协议合成合法的 url

8.  查找缓存：
    网络进程获取到 URL，先去本地缓存中查找是否有缓存资源，如果有则拦截请求，直接将缓存资源返回给浏览器进程；否则，进入网络请请求阶段；
9.  DNS 解析：
    DNS 查找数据缓存服务中是否缓存过当前域名信息，有则直接返回；否则，会进行 DNS 解析返回域名对应的 IP 和端口号，如果没有指定端口号，http 默认 80 端口，https 默认 443。如果是 https 请求，还需要建立 TLS 连接；
10. 建立 TCP 连接：
    TCP 三次握手与服务器建立连接，然后进行数据的传输；（三次握手）
11. 发送 HTTP 请求：
    浏览器首先会向服务器发送请求行，它包含了请求方法、请求 URI 和 HTTP 协议的版本；另外还会发送请求头，告诉服务器一些浏览器的相关信息，比如浏览器内核，请求域名；

12. 服务器处理请求：
    服务器首先返回响应行，包括协议版本和状态码，比如状态码 200 表示继续处理该请求；如果是
    301，则表示重定向，服务器也会向浏览器发送响应头，包含了一些信息；
13. 页面渲染:
    1. 浏览器将获取的 HTML 文档解析成 DOM 树。
    2. 处理 CSS 标记，构成层叠样式表模型 CSSOM(CSS Object Model)。
    3. 将 DOM 和 CSSOM 合并为渲染树(rendering tree)，代表一系列将被渲染的对象。
    4. 渲染树的每个元素包含的内容都是计算过的，它被称之为布局 layout。浏览器使用一种流式处理的方法，只需要一次绘制操作就可以布局所有的元素。
    5. 将渲染树的各个节点绘制到屏幕上，这一步被称为绘制 painting。
14. 最后断开 TCP 连接：
    数据传输完成，正常情况下 TCP 将四次挥手断开连接。但是如果浏览器或者服务器在 HTTP 头部加上 Connection: keep-alive，TCP 就会一直保持连接。

## 箭头函数和普通函数的区别

## vue 的 nexttick 执行机制

this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
1、异步说明
Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新
2、事件循环说明
简单来说，Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。

以下使用 nexttick 的三种情况

```js

// 1、点击按钮显示原本以 v-show = false 隐藏起来的输入框，并获取焦点。

show(){
this.show = true //修改 v-show
document.getElementById("keywords").focus() //在第一个 tick 里，获取不到输入框，自然也获取不到焦点
}
// 修改为：

showsou(){
this.showit = true
this.$nextTick(function () {
// DOM 更新了
document.getElementById("keywords").focus()
})
}

```

## vue 的组件间传值（父传子，子传父，兄弟组件传值）

父传子

通过绑定 v-bind 和 props 来实现父组件给子组件传值

子传父

子组件不能直接传值给父组件，通过调用父组件的方法把子组件的值传给父组件。使用 this.$emit('listen',value)

兄弟组件传值

vuex

```

```

## 说说 Vuex 的五个核心属性

- State
- Mutations
- Getter
- Actions
- modules

## 代码填充题

```js
function Person(){
    ...
}
var p1 = new Person()
var p2 = new Person()
//怎么补充 function Person(){},让p1和p2相等
```

## 如果自己写一个发布订阅者模式怎么写

## 防抖和节流的区别

## 知道哪些设计模式吗

## 三次握手 四次挥手

## 伪类和伪元素

伪类和伪元素都是用来修饰不在文档树中的部分

伪类的操作对象是文档树中已有的元素，而伪元素则创建了一个文档数外的元素。因此，伪类与伪元素的区别在于：有没有创建一个文档树之外的元素。

## 函数作用域和闭包

## 在调用 new 的过程中会发生哪些事

1. 新生成一个对象
2. 链接到原型
3. 绑定 this
4. 返回新对象

## 基本数据类型 null 和 undefined

```javascript
typeof null; // 'object'

typeof undefined; // 'undefined'

let value = null,
  a;

value == a; // true

value === a; // false
```

## for in 和 for of 的区别

```js
let testObj = {
  name: "test",
  age: "1",
  birthday: "2021/08/04",
  type: "object",
};
let testArr = ["西瓜", "栗子", "苹果", "橘子"];
for (let item in testArr) {
  console.log(item);
  console.log(testArr[item]);
  // 0 1 2 3
  // 西瓜 栗子 苹果 橘子
}
for (let item of testArr) {
  console.log(item);
  // 西瓜 栗子 苹果 橘子
}
for (let item in testObj) {
  console.log(item);
  console.log(testObj[item]);
  // name age birthday type
  // test  1  2021/08/04 object
}
for (let item of testObj) {
  console.log(item);
  // Uncaught TypeError: testObj is not iterable
}
```

### SSR(Server-side rendering 服务端渲染)

```
Server-side rendering (SSR)是应用程序通过在服务器上显示网页而不是在浏览器中渲染的能力。服务器端向客户端发送一个完全渲染的页面（准确来说是仅仅是 HTML 页面）。同时，结合客户端的 JavaScript bundle 使得页面可以运行起来。
```

### js 垃圾回收机制

- 首先什么是垃圾回收，为什么要有垃圾回收。在程序运行时会将程序中的变量存储在内存中，但是数据会一直存在内存中，当这些程序没有用到时，还不释放内存，就会引起内存泄漏。这时候就需要垃圾回收这下未使用的数据/程序。如果不使用垃圾回收的话会让系统变卡顿
- 在 js 中，垃圾回收是自动执行的，在 V8 引擎中垃圾回收分为以下几个部分
  - 新生代内存区（new space）
  - 老生代内存区（old space）
  - 大对象区（large object space）
  - 代码区（code space）
  - map 区（map space）
- 新生代内存区和老生代内存区的区别
  - 是新生代分配的空间小一点只有 1~8M，对象存活时间短 ,而老生代分配的空间更大，对象存活时间长。
  - 新生代中存放生存时间短的对象，老生代存放生存时间久的对象
  - 新生代中使用的 Scavenge 算法，就是把新生代区域划分为两个区域， 一个 from 区域，一个 to 区域。新的对象在分配空间时首先被分到 from 区域，当对象区域快写满时，就进行整合，先将 from 空间里的存货对象放到 to 区域中吗，然后回收未存活空间。现在 to 区域里的都是存活对象，from 区域是空白，将 to 和 from 进行角色互换。重新开始下一轮的垃圾回收。同时经历过两轮还存活的新生代对象将会晋升到老生代对象。
  - 老生代使用标记 - 清除 - 整理算法。因为老生代中的对象空间大，使用复制的话效率不是很高。先标记哪些是要回收的变量，再进行回收（清除），然后将内存空间整理（到一边），这样空间就大了。

### nextTick

- vue 中的 nextTick 主要用于处理数据动态变化后，DOM 还未及时更新的问题，用 nextTick 就可以获取数据更新后最新 DOM 的变化,
- Vue 会根据当前浏览器环境优先使用原生的 Promise.then 和 MutationObserver，如果都不支持，就会采用 setTimeout 代替。
- vue 是异步执行 dom 更新的，一旦观察到数据变化，vue 就会开启一个队列，然后把在同一事件循环当中观察到数据变化的 watcher 推送进这个队列，如果这个 watcher 被触发多次，只会被推送到队列一次，这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和 dom 操作，这样可以提高渲染效率。
- 组件在 created 是对渲染的 dom 进行获取 这时候一般是获取不到的，需要 this.$nextTick 进行获取

### vite&&webpack

- vite 使用 esbuild 预构件依赖 。js 是单线程的，而 esbuild 使用 go 语言进行开发，支持多线程。速度比 webpack 快上 10~100 倍。
- webpack 的 编译流程 ： 分析依赖 => 编译打包 => 交给本地服务器进行渲染。
- webpack 打包之后存在的问题：随着模块的增多，会造成打出的 bundle 体积过大，进而会造成热更新速度明显拖慢。
- vite 启动服务器 => 请求模块时按需动态编译显示。
- webpack 只能打包 commonjs 规范的 js 文件 ，要靠 loader 来将其他类型的文件转换成 js 文件格式，如：

  1.  css-loader 和 style-loader 模块是为了打包 css 的
  2.  babel-loader 和 babel-core 模块时为了把 ES6 的代码转成 ES5
  3.  url-loader 和 file-loader 是把图片进行打包的。

- plugin 可以扩展 webpack 的功能，让 webpack 具有更多的灵活性。
  1. webpack 内置 CommonsChunkPlugin，提取公共代码,提高打包效率，将第三方库和业务代码分开打包

### 前端工程化

### 谈谈你工作中遇到的问题，怎么解决的？

### JavaScript 数字精度问题

0.1+0.2 == 0.3 吗 ？ 为什么？
最可靠的方法是借助方法 toFixed(n) 对结果进行舍入：

### vue 中常用的修饰符

- .stop 阻止冒泡事件
- .enter 按回车执行
- .once 只能执行一次
- .sync

### vue2、vue3 的 diff 算法实现差异

vue2、vue3 的 diff 算法实现差异主要体现在：处理完首尾节点后，对剩余节点的处理方式。
在 vue2 中是通过对旧节点列表建立一个 { key, oldVnode }的映射表，然后遍历新节点列表的剩余节点，根据 newVnode.key 在旧映射表中寻找可复用的节点，然后打补丁并且移动到正确的位置。
而 vue3 则是建立一个存储新节点数组中的剩余节点在旧节点数组上的索引的映射关系数组，建立完成这个数组后也即找到了可复用的节点，然后通过这个数组计算得到最长递增子序列，这个序列中的节点保持不动，然后将新节点数组中的剩余节点移动到正确的位置。

### computed 和 watch 的区别

- computed 是计算属性，依赖于多个值计算出来的结果，watch 是监听的值发生变化就执行里面的回调,并且 computed 的值有缓存，
- computed 不支持异步，watch 支持异步
- computed 默认在页面第一次加载的时候执行， watch 默认第一次加载的时候不执行，如果在页面第一次加载时更新，需要加 immediate:true 属性
-
- ### 页面首屏优化

1. 骨架屏
2. 服务端渲染
3. 图片懒加载
4. 路由懒加载
5. 异步组件？
6. 减少 http 请求

### vue 中的动态组件

1.Vue2 使用 :is

```
<template>
  <component :is="name"></component>
</template>
```

### ref 和 reactive 的区别

- ref 可以定义基本类型和对象
- reactive 只能定义对象
- ref 操作数据需要通过 .value reactive 不需要
- ref 通过 Object.defineProperty()的 get 和 set 来实现响应式， reactive 通过 Proxy 来实现响应式

### 普通盒模型 和 怪异盒模型

- 普通盒模型
  - 元素的 width = content
- 怪异盒模型
  - 元素的 width = content + border + padding

### event loop

因为 js 是单线程的，如果某段程序需要等待一会再执行，后面的程序都会被阻塞，这样也就带来了一些问题。为了解决这个问题，js 出现了同步和异步两种任务，两种任务的差异就在于执行的优先级不同。event loop 就是对任务的执行顺序做了详细的规范。

- 常见的微任务 ： promise.then() .then() 里的函数
- 常见的宏任务 ： setTimeout setInterval callback
- 执行优先级： 同步任务 --> 微任务 --> 宏任务

### flex 布局

flex:1 ==> flex:1 1 auto

- flex 的默认值为 flex:0 1 auto。flex:1 相当于设置了 flex:1 1 auto。

- flex 实际上是 flex-grow、flex-shrink 和 flex-basis 三个属性的缩写。
- flex-grow 属性指定了 flex 容器中剩余空间的多少应该被分配给项目。flex-grow 设置的值为扩张因子，默认为 0，剩余空间将会按照这个权重分别分配给子元素项目。
- flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩。默认属性值为 1，所以在空间不够的时候，子项目将会自动缩小。
- flex-basis 属性指定了 flex 元素在主轴方向上的初始大小。如果不使用 box-sizing 改变盒模型的话，那么这个属性就决定了 flex 元素的内容的尺寸。如果设置了 flex-basis 值，那么元素占用的空间为 flex-basis 值；如果没有设置或者设置为 auto，那么元素占据的空间为元素的 width/height 值。
