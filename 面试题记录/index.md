### 2021 03 01

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

```
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

```
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
            if(source[key] || typeOf source == 'object'){
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

## 两个数组合并之后去重

## `set` `map` `weakset` `weakmap` 的区别

## 用`reduce`对对象数组去重

## 数组的`map` , `filter` , `foreach` , `every` , `some` ,`reduce`方法

## 判断一个变量的数据类型是什么怎么判断

## `intanceof`和`typeof`区别以及各自优劣

## `==`和`===`的区别

## 用 es5 的语法去重[1,1,'a','a',NaN,NaN]

## `script`标签中的 defer 和 asycn 的区别

## link 和 @import 的区别

## 谈谈对 BFC 的理解

## 图片的懒加载和预加载

## ES6 模块和 CommonJS 模块的区别

## 对 Http 缓存的理解

## async/await 和 promise 的各自优劣

## Babel 的原理

## 实现一个 instanceof 方法

## 网络安全风险有哪些

## promise 等待多个异步请求并行执行后，将获取的数据统一处理（promise.all）

## 什么时候用箭头函数

## 怎么修改 this 指向

## bind , apply ,call 各自有什么区别

## 有没有改过 webpack 的配置

## Nuxt 和 vue 有什么区别

## 服务端渲染和客户端渲染的区别优劣

## vue 服务端渲染的原理

## 单页面和多页面的区别

## 单页面如何解决首页加载慢的问题

## js 里面的 this 是什么

## 说一说 js 的作用域链

## promise.all 的底层逻辑

## 为什么用 const 声明了一个对象，还可以改变该对象的值

## 解决跨域问题的方法有哪些

## 重绘和回流分别是什么概念？有什么不同？什么时候会出现重绘和回流现象？怎么尽量避免？

## mvvm 的理解

## 什么是响应式布局？怎么实现？

## 怎么清楚浮动？

## 怎么判断回文的方法

## 浏览器到输入网址回车到渲染发生什么

## 箭头函数和普通函数的区别

## vue 的 nexttick 执行机制

## vue 的组件间传值（父传子，子传父，兄弟组件传值）

## 说说 Vuex 的五个核心属性

## 代码填充题

```
function Person(){
    ...
}
var p1 = new Person()
var p2 = new Person()
怎么补充 function Person(){},让p1和p2相等
```

## 如果自己写一个发布订阅者模式怎么写

## 防抖和节流的区别

## 知道哪些设计模式吗
