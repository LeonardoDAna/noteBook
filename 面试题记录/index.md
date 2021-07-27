# 2021 03 01

## `get` 和 `post` 的区别

最直观的区别就是 `get` 参数放在 `URL` 里, `post` 请求的参数放在 `request body`里

## `get` url 的最长多少

    256个字节

## post 请求体 body 的最大是多少

    post 请求体理论上来讲是没有限制的  在本地tomcat上限制大小为2M

## cors 攻击

## http 协议和 tcp/ip 协议的区别

    tcp/ip 三次握手完成传输信息
    http 协议是建立在TCP协议之上的一种应用

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

<!--  -->

## 对接口的安全措施

## `Vue`的双向绑定原理，虚拟`dom`是什么，如果让你写一个双向绑定的东西你会怎么写

vue 的双向数据绑定 主要采用：数据劫持加`发布者订阅者`模式的方法,通过 object.defineProperty 的 get 和 set ，在数据变动的时候发布消息给订阅者触发监听

``` html
<body>
  <input id="inputBox" type="text" value="">
  <p id="pBox"></p>
</body>
<script>
  let a = new Object;
  Object.defineProperty(a, 'propertyname', {
    get: function () {
      return a;
    },
    set: function (newValue) {
      document.getElementById('inputBox').value = newValue
      document.getElementById('pBox').innerHTML = newValue
    }
  })
  document.getElementById('inputBox').onkeyup = function (e) {
    a.propertyname = e.target.value
  }
  function timeFn(){
    setTimeout(()=>{
      a.propertyname = '8888'
    },3000)
  }
  timeFn()
</script>

```

vdom 是虚拟 DOM(Virtual DOM)的简称，指的是用 JS 模拟的 DOM 结构，将 DOM 变化的对比放在 JS 层来做。换而言之，vdom 就是 JS 对象。

比如在一个 table 里面有很多数据，每次改动之后，table 标签都得重新创建、渲染，我们不希望这种事情发生，因为 DOM 重绘很消耗浏览器性能。

因此我们采用 JS 对象模拟的方法，将 DOM 的比对操作放在 JS 层，减少浏览器不必要的重绘，提高效率。

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
this永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的
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

基本类型的数据都存放在栈里面

引用类型由于大小不固定，系统将储存该引用类型的地址存栈中，并赋值给变量本身，而具体的数据存在堆中。

当基本类型复制给另一个变量时，系统会在栈中开辟一个新的空间，赋予相同的值，这样两个变量就相互独立。

当引用类型，新的变量复制的是在栈中指向原数据的地址，所以当原数据发生改变的时候新变量的值也会发生变化

``` js
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

``` css
.halfBorder{
    border:1px solid black;
    tranform:scale(0.5,0.5)
}
```

## 两个数组合并之后去重

``` js
    let concatArr = a.concat(b)

    function unqi(arr) {
      let hashMap = new Map
      let requestArr = []
      for (let i = 0; i < arr.length; i++) {
        if (hashMap.has(arr[i])) {
          hashMap.set(arr[i], true)
        } else {
          hashMap.set(arr[i], false)
          requestArr.push(arr[i])
        }
      }
      return requestArr
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

``` js
function Uniq(arr = []) {
    return arr.reduce((t, v) => t.includes(v) ? t : [...t, v], []);
}
const arr = [2, 1, 0, 3, 2, 1, 2];
Uniq(arr); // [2, 1, 0, 3]

```

## 数组的`map` , `filter` , `foreach` , `every` , `some` ,`reduce`方法

## 判断一个变量的数据类型是什么怎么判断

## `instanceof`和`typeof`区别以及各自优劣

typeof 用来区分 undefined,number,boolean,string,funciton,object

instanceof 用来区分一个 object 属于什么类（）

instanceof 运算符是用来测试一个对象是否在其原型链原型构造函数的属性。其语法是 object instanceof constructor

## `==`和`===`的区别

`==`会有类型转换 `===` 必须要类型相同和值相同才会返回 ture

## 用 es5 的语法去重[1,1,'a','a',NaN,NaN]

## `script`标签中的 defer 和 asycn 的区别

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

``` js
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

``` js
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
服务器端渲染的话，首先，前端耗时少。因为后端拼接完了html，浏览器只需要直接渲染出来。

其次，有利于SEO。无需占用客户端资源。即解析模板的工作完全交由后端来做，客户端只要解析标准的html页面即可，这样对于客户端的资源占用更少，尤其是移动端，也可以更省电。

后端生成静态化文件。

但是另一方面来讲的话，服务器端渲染不利于前后端分离，开发效率低。使用服务器端渲染，则无法进行分工合作，则对于前端复杂度高的项目，不利于项目高效开发。


## vue 服务端渲染的原理

## 单页面和多页面的区别

## 单页面如何解决首页加载慢的问题
图片优化

路由懒加载

webpack打包优化

按需引入


## js 里面的 this 是什么

## 说一说 js 的作用域链

## promise.all 的底层逻辑

## 为什么用 const 声明了一个对象，还可以改变该对象的值

## 解决跨域问题的方法有哪些

## 重绘和回流分别是什么概念？有什么不同？什么时候会出现重绘和回流现象？怎么尽量避免？

## mvvm 的理解

## 什么是响应式布局？怎么实现？

## 怎么清除浮动？

在浮动元素下新增一个空的 div 样式 clear:both

``` css
floatDiv{
  clear:both
}
// 添加无意义标签 语义化差
```

伪元素清除浮动 (推荐使用)

``` css
floatBox::after{
  content:'';
  clear:both;
  display: block;
  height: 0;
  visibility: hidden
}
```

BFC 清除浮动

``` css
floatBox{
  overflow:hidden;
}

// 内容增多的时候超过盒子大小会导致内容被隐藏
```

## 怎么判断回文的方法

## 浏览器到输入网址回车到渲染发生什么

1.  URL 解析
2.  DNS 解析
3.  
4.  TCP/IP 链接
5.  服务器处理请求
6.  浏览器响应请求
7.  页面渲染

## 箭头函数和普通函数的区别

## vue 的 nexttick 执行机制

## vue 的组件间传值（父传子，子传父，兄弟组 件传值）

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
  - 
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
3. 绑定this
4. 返回新对象

