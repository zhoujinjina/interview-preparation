1.说说事件循环：
事件循环是 javascript 处理异步操作的机制，当我们执行异步操作时，javascript 会将回调函数添加到事件队列中，等待后续执行。
事件循环会不断从事件队列中取出事件，执行函数，并等待新的事件加入事件队列  
执行当前调用栈中的所有同步任务；

执行所有微任务队列中的微任务，直到队列为空；

从宏任务队列中取出优先级最高的任务，执行其回调函数；

如果宏任务执行过程中产生了新的微任务，将它们添加到微任务队列中；

返回第 2 步，继续执行微任务队列中的任务，直到队列为空。

需要注意的是，事件循环的过程是不断循环执行的，直到事件队列中没有任务为止。在 JavaScript 中，宏任务包括 setTimeout、setInterval、I/O 操作等，微任务包括 Promise 等。

2.说说闭包
闭包是一个函数内又定义了一个函数，内部函数访问了外部函数的变量，就形成了闭包，闭包会形成私有空间，可以避免全局变量
的污染，可以持久化内存，保存数据，但是闭包容易造成内存泄漏
（首先是尽量避免闭包的使用，然后是及时释放不再使用的变量和对象，在使用完对象和变量后，及时将其赋值为 null 或者删除他们的引用）

3.jwt 的使用 jwt.sign(Payload,secret key,{过期时间}) jwt.verify(token,secret key)
在服务端生成 jwt 之后将其返回客户端 客户端收到时将其保存在本地储存中(localStorage.setItem)
在请求数据时将 jwt 添加到请求头中，{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}
后端验证 req.headers.Authorization jwt.verify 验证成功 req.username=""

4.垂直居中方案 absolute flex(父元素)

5.flex:1
它将会占据可用空间的所有剩余部分
flex-grow:1 有剩余空间时进行拉伸
flex-shrink:1 剩余空间不足时进行缩小
flex-basis:0% 这意味着元素在没有任何伸缩能力之前的初始大小为 0%

6.css 隐藏元素方案
display:none
opacity:0
visibility:hidden

7.说说浏览器输入地址后会发生的事情
输入地址后，浏览器会向服务器发起 DNS 请求得到相应的 ip 地址，之后会进行 tcp 三次握手与服务器连接，连接成功后会发出 get 请求，通常是一个 html 文件，服务器会根据响应头和 html 内容进行响应，浏览器得到数据后，会解析 html 得到 DOM 树，解析 css 得到 CSSDOM 树，然后将 DOM 树和 CSSDOM 树合并得到 render 树，然后会计算每个节点在页面中的位置和大小，得到布局树，最后根据布局树中的节点绘制到页面上，得到最终的视觉效果

TCP 三次握手和四次挥手
三次握手：客户端给服务端发送同步包(SYN) 服务端收到后发送同步——确认包(SYN-ACK) 客户端收到 SYN-ACK 包后向服务器发送确认包(ACK)
四次挥手：客户端给服务端发送结束包(FIN) 服务端收到后发送结束——确认包(FIN-ACK) 并且也发送结束包(FIN)给客户端 表示服务端要关闭连接 客户端收到后发送确认包(ACK)

8.get 和 post 的区别
get 请求常用于请求数据，post 常用于写入数据
get 请求的参数暴露在 url 中，并且受到 url 长度的限制，
post 的请求参数在请求体中，比较安全
get 请求的结果会被浏览器缓存，post 请求每次都需要服务器返回

9.ajax 和 axios 的区别
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/resource?param1=value1&param2=value2', true);
xhr.onreadystatechange = function() {
if (this.readyState === 4 && this.status === 200) {
console.log(this.responseText);
}
};
xhr.send();

10.介绍盒模型
它将 HTML 元素看作是一个矩形的盒子，由内容区域，内边距，外边距，边框组成
可以使用 box-sizing 来设置盒模型的计算方式，content-box 表示盒模型只包括内容区域，border-box(怪异盒模型)表示包括内容区域，内边距和边框

11.介绍一下相对定位和绝对定位
相对定位是相对于元素在文档流中的初始位置进行定位的  
绝对定位是相对于已经定位的祖先元素进行定位的 假如没有已经定位的祖先元素 则相对于 html 进行定位

12.http 状态码
1xx 信息性状态码 表示服务器已经接受请求，正在处理请求，或者需要进一步的操作以完成请求
2xx 成功状态码
3xx 重定向状态码
4xx 客户端错误状态码
5xx 服务端错误状态码

13.常见的请求头
User-Agent 用于标识客户端的操作系统、浏览器和版本等信息
Accept 用于告知服务器客户端能够接受的数据类型，可以是 HTML、XML、JSON 等
Content-Type 用于告知服务器请求中的数据类型
Cache-Control 用于控制缓存的行为，如 max-age、no-cache 等
Connection 用于告知服务器客户端的连接类型，如 keep-alive、close 等。
Cookie 用于在客户端和服务器之间传递会话信息
Authorization 用于在请求中传递用户的身份认证信息
Referer 用于告知服务器请求的来源，即前一个页面的 URL 地址

14.webpack
打包流程： 1.读取配置文件，解析配置项 2.从入口文件开始，递归遍历所有模块 3.根据模块的类型，用相应的 loader 对模块进行编译 4.将编译后的模块组成 chunk 5.根据 output 配置项，将 chunk 生成对应的文件

plugin 和 loader 区别：
Plugin 和 Loader 都是 Webpack 的扩展机制
loader 是用于加载不同类型的模块，将它们转换成 webpack 可以处理的模块
Plugin 则是用于扩展 webpack 的功能，例如优化、压缩、代码分离

常见的 plugin 和 loader 有哪些：
常见的 Loader 有：babel-loader、css-loader、style-loader、sass-loader、file-loader、url-loader 等。
常见的 Plugin 有：HtmlWebpackPlugin、CleanWebpackPlugin、CopyWebpackPlugin、MiniCssExtractPlugin、UglifyJSPlugin 等

热更新的原理：
首先，Webpack 在编译时会为每个模块生成一个唯一的 ID，以便在后续的模块替换中进行识别。
当一个模块发生变化时，Webpack 会重新编译这个模块，然后将变化的部分打包成一个补丁（Patch）文件。
Webpack 通过 WebSocket 与浏览器建立连接，将 Patch 文件推送给浏览器。
浏览器接收到 Patch 文件后，通过 Webpack 的 HMR Runtime 对模块进行更新，然后将更新后的模块插入到页面中，从而实现热更新的效果

webpack 性能优化：
 优化构建速度：
1.减少执行构建的模块：通过 include exclude 配置来确保转译尽可能少的文件 
2.定向查找：resolve.modules 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤 
3.并行构建以提升总体速度：HappyPack Thread-loader
4.并行压缩提高构建效率:压缩 js 主要使用 uglifyjs-webpack-plugin 和 terser-webpack-plugin 
5.合理使用缓存：通过缓存提高二次打包的速度 babel-loader 开启缓存 cache-loader放在其他loader之前
    loader: 'babel-loader',
    options: {
    cacheDirectory: true,
    },
优化构建结果：
1.压缩代码 js css html image
2.按需加载 很多时候我们不需要一次性加载所有的JS文件，而应该在不同阶段去加载所需要的代码。
3.提前加载 当浏览器空闲时加载模块 prefetch 和 preload
4.code splitting(代码分割) SplitChunksPlugin(js) mini-css-extract-plugin(css) 
在项目中，一般是使用同一套技术栈和公共资源。那么如果每个页面的代码中都有这些公开资源，会造成资源浪费
5.tree shaking
6.Gzip对资源进一步压缩
7.scope hoisting （作用提升 把需要导入的文件直接移入模块的顶部）
15.网络安全
强制缓存和协商缓存
强制缓存：第一次向服务器请求资源之后，服务器会在响应头设置 cache-control 字段，告诉浏览器一定时间内可以直接从缓存中获取资源
协商缓存：当资源过期或者需要验证缓存是否有效时，浏览器发送请求会在请求头添加 if-modified-since 或 if-none-match 字段，服务器会根据字段判断资源是否需要重新获取，如果没有被修改，则返回 304 not modified 状态码，告诉浏览器可以直接从缓存中获取资源

JWT 原理
由三部分组成：头部、荷载、签名
客户端向服务器发送请求，请求头中包括了 JWT 令牌
服务器验证 JWT 的合法性，如果验证通过，服务器可以根据荷载中的数据，判断用户的身份，获取数据

TCP 三次握手
客户端向服务器发送一个 SYN 包请求连接，服务端收到后发送一个 SYN 包和 ACK 包给客户端，表示同意连接，并要客户端确认，客户端收到后再发送一个 ACK 包给服务端，表示建立成功

HTTP 和 HTTPS 的区别
安全性：HTTP 中数据传输是明文传输的，容易被窃听和篡改，而 HTTPS 通过 SSL/TLS 加密协议，保证通信的安全性
认证：HTTPS 通过数字证书来认证 Web 服务器的身份，而 HTTP 没有提供身份认证的机制
端口：HTTP 80 HTTPS 443
性能：HTTPS 在通信过程中需要加密和解密等操作，会导致通信性能降低
SEO：HTTPS 被 Google 认为是一个重要的 SEO 信号，可以提升网站在搜索结果中的排名

16.基本数据类型和引用数据类型的区别
基本数据类型存储在变量所在的内存中，
而引用数据类型存储在内存的堆内存中，变量中存储的是指向该内存地址的指针。
基本数据类型的变量是独立的，互不影响，而引用类型的变量可能会相互影响。
基本数据类型存储在栈中 引用数据类型存储在堆中 变量保存的是指向堆地址的指针 变量存储在栈中

17.React
生命周期：
挂载
constructor
getDerivedStateFromProps
render
componentDidMount

更新
getDerivedStateFromProps
shouldComponentUpdate
render
getSnapshotBeforeUpdate
componentDidUpdate

卸载
componentWillUnmount

hooks 不能在判断 循环 嵌套函数中使用

函数式编程和类式编程区别：
类组件是使用 ES6 类语法定义的组件，在类组件中可以使用状态（state）、生命周期方法（lifecycle methods）和 ref 等特性。
类组件可以使用 this 关键字访问组件的状态和方法。而函数组件是使用函数语法定义的组件，它没有自己的状态（state）和生命周期方法（lifecycle methods），但可以通过 props 来接收外部传入的数据

React 和 Vue 区别：
模板语法：Vue 使用模板语法，将 JavaScript 代码和 HTML 代码混合在一起，React 则使用 JSX 语法，可以在 JavaScript 代码中直接嵌入 HTML 代码
组件化：Vue 和 React 都支持组件式开发，Vue 相对比较简单自然，React 组件更加灵活和可扩展
性能：Vue 使用模板语法，可以在编译时优化，在性能方面比 React 稍微快些，但是 React 使用虚拟 DOM 来减少不必要的 DOM 操作，因此在大规模复杂应用场景表现更好
生态系统：React 的生态系统更加丰富和成熟，包括 React Native、Redux、Next.js 等，而 Vue 的生态系统则相对较小

useMemo：用于在函数组件中缓存计算结果，避免重复计算。
useCallback：用于在函数组件中缓存函数，避免函数重复创建

说一下 diff 算法：
当组件的状态或属性发生变化时，React 会使用 diff 算法来计算出需要更新的 DOM 节点，从而实现高效的更新。diff 算法的核心思想是将新旧两个虚拟 DOM 树进行比较，计算出需要更新的节点，然后批量更新 DOM
diff 算法的具体实现过程如下：
比较根节点：首先比较新旧两个虚拟 DOM 树的根节点，如果节点类型不同，则直接替换整个节点。如果节点类型相同，则比较属性和子节点。
比较属性：比较它们的属性是否有变化，如果有变化，则更新属性。
比较子节点：比较它们的子节点是否有变化。如果子节点相同，则继续递归比较子节点的属性和子节点。如果子节点不同，则直接替换子节点

说说虚拟 DOM 和真实 DOM
虚拟 DOM 是一个基于 JavaScript 对象对真实 DOM 的抽象表示，它可以反映真实 DOM 的结构和状态，当应用状态发生改变时，会创建一个新的虚拟 DOM，跟旧的虚拟 DOM 进行比较，计算出最小的 DOM 操作
虚拟 DOM 的操作速度相比真实 DOM 更快，因为虚拟 DOM 是基于 JavaScript 对象的操作，而真实 DOM 是基于浏览器的操作

React Fiber 可以理解为：
React 内部实现的一套状态更新机制。支持任务不同优先级，可中断与恢复，并且恢复后可以复用之前的中间状态。

18.WebSocket 的原理
Websocket 是一种基于 TCP 协议的全双工通信协议，它允许在客户端和服务器之间建立一个持久性的连接，可以进行双向实时通信
Websocket 的工作原理是：客户端和服务器首先通过 HTTP 协议建立连接，然后升级到 Websocket 协议，建立一个双向通信的持久连接。一旦连接建立成功，客户端和服务器就可以进行双向通信，可以发送和接收文本或二进制消息

19.git 解决冲突和回退版本
在 Git 中，当两个分支上的修改冲突时，您需要解决这些冲突。以下是解决 Git 合并冲突的一般步骤：

1. 确认冲突：使用`git status`命令查看哪些文件具有冲突。冲突的文件会被标记为“Unmerged”。

2. 手动解决冲突：打开冲突文件，并查找标识为`<<<<<<< HEAD`，`=======`和`>>>>>>>`的 Git 标记。它们分别表示当前分支的修改、合并的基础版本和另一个分支的修改。您需要手动编辑文件，将两个分支的修改合并在一起。

3. 添加解决冲突的文件：编辑冲突文件后，将其标记为已解决冲突并准备提交。使用`git add`命令将文件标记为已解决冲突，例如`git add <冲突文件>`。

4. 提交合并：使用`git commit`命令提交合并的更改。在提交消息中，您可以输入有关已解决冲突的信息。

5. 完成合并：使用`git merge`命令完成合并操作，例如`git merge <合并的分支>`。如果没有其他冲突，则合并将成功完成。

如果您在解决冲突时遇到困难或错误，请使用`git status`命令查看状态，并查看有关如何解决特定冲突的 Git 文档和资料。
git reset HEAD~1 回退当前一次 commit 未提交到远程仓库的
git revert HEAD~1 回退版本 当前分支回退一次已经提交到远程仓库提交 再使用 git push 可让远程仓库回退到之前一个版本
git branch -f main HEAD~1 让 main 分支指向前面的第一个提交
git merge 和 git rebase 的区别
git merge 是将一个分支的更改合并到另一个分支上，创建一个新的合并提交，保留两个分支的历史记录。
git rebase 是将一个分支的更改应用到另一个分支上，使得提交历史变得更加线性，但可能会导致冲突和合并麻烦。
git cherry-pick c1 c2 将这两次提交复制到当前分支
git rebase -i HEAD~n 将当前分支之前的 n 个提交复制到另一个分叉中 并且可以删除其中一个或者几个

20.css3 新特性
border-radius 圆角边框
box-shadow 盒子阴影
tex-shadow 文字阴影
Gradient 渐变背景 background: linear-gradient(to bottom, #ff0000, #00ff00)
transition 过渡效果
animations 动画效果
flex 弹性盒子布局
grid 网格布局

21.localStorage 和 sessionStorage 的区别
1.localStorage 中的数据没有过期时间，除非通过代码或者手动清除，否则会一直保存在客户端，
sessionStorage 中的数据会在当前会话窗口关闭时自动清除
localStorage 的数据可以在同源的所有窗口共享 而 sessionStorage 中的数据只在同一个窗口中有效，不同窗口之间的数据不共享
localStorage 和 sessionStorage 中存储的数据大小限制在不同的浏览器中有所不同，但通常都在 5MB 左右

22.传 token 用 cookie 不太好是为啥
将其存储在 cookie 中可能存在一些安全问题，攻击者可能通过窃取 cookie 来获取用户的身份验证信息
CSRF（跨站请求伪造）攻击：攻击者可以通过在恶意网站上插入伪装的请求来利用用户在另一个站点上存储的 cookie，从而伪造用户的请求。
因此，无论请求哪个地址，只要在当前域名下存在 cookie，就会自动带上该域名下的所有 cookie
XSS（跨站脚本）攻击：攻击者可以通过在网站上插入恶意脚本来窃取存储在 cookie 中的身份验证信息。
如果在客户端设置了 cookie 的 HttpOnly 属性，则该 cookie 无法通过 JavaScript 访问，只能在浏览器中自动发送。这可以有效地减少一些安全风险，例如 XSS 攻击
会话劫持：攻击者可以通过窃取用户的 cookie，然后在自己的计算机上使用该 cookie 伪装成用户，并访问用户的帐户

23.HTTP2.0 和 HTTP1.1 的区别
多路复用（Multiplexing）：HTTP/2 引入了多路复用的机制，允许在同一个 TCP 连接上同时发送多个请求和响应。这意味着在 HTTP/2 中，多个请求可以并行处理，而不需要等待之前的请求完成。这提高了性能和效率，减少了延迟。
二进制传输（Binary Framing）：HTTP/2 使用二进制格式对数据进行传输和解析，而不是 HTTP/1.1 中的文本格式。二进制格式更高效，可以更快地解析和处理数据。
首部压缩（Header Compression）：HTTP/2 使用首部压缩算法对请求和响应的首部进行压缩，减少了传输的数据量。这有助于减少网络带宽的使用和提高性能。
服务器推送（Server Push）：HTTP/2 支持服务器推送机制，即服务器可以主动将与请求相关的资源推送给客户端，而不需要客户端明确地请求这些资源。这可以减少往返时间，提高页面加载速度。
流量控制（Flow Control）：HTTP/2 引入了流量控制机制，可以在请求和响应之间进行流量控制，避免了由于流量过载而导致的性能问题。
优先级（Priority）：HTTP/2 允许客户端设置请求的优先级，以指定哪些请求应该优先处理。这有助于提高关键资源的加载速度和用户体验。

24.react 怎么更新 dom
在 setState 之后 react 会把新的状态合并到状态对象中，然后将组件标记为“脏组件”，将其添加到待更新队列中，react 会调用 render 方法生成新的虚拟 DOM，然后 diff 算法对比新旧虚拟 DOM 树，找出需要更新的部分，最后将更新操作应用到真实 DOM 中

25.apply call bind 的区别
call 可以指定一个对象为函数 this
apply 和 call 相似 但是可以接收一个数组作为函数的参数
bind 可以创建一个新的函数 可以将新函数的 this 绑定到对象中

25.react 为什么要设置唯一 key
使用唯一 key 属性是为了准确地匹配新旧节点，从而提高 diff 算法的性能和正确性。使用唯一 key 属性可以帮助 diff 算法识别哪些节点是需要更新的，哪些节点是需要删除或新增的。如果没有唯一 key 属性，diff 算法可能会将相同类型和属性的节点错误地视为相同节点，从而导致渲染错误或性能问题

26.数组的哪些方法会改变原数组
push(): 在数组末尾添加一个或多个元素。
pop(): 移除并返回数组的最后一个元素。
shift(): 移除并返回数组的第一个元素。
unShift(): 在数组开头添加一个或多个元素。
splice(): 从数组中添加或删除元素。
reverse(): 反转数组中元素的顺序。
sort(): 按照指定规则对数组中的元素进行排序。
fill(): 用一个固定值填充数组中从起始索引到终止索引内的全部元素。

数组的遍历方法哪些支持打断 都可以通过抛出错误来终止
forEach map reduce filter 不支持打断
some every for 可以打断 some 和 every 分别返回 true 和 false 来打断 for 循环可以通过 break 来跳出循环 continue 是跳过本次循环
27.useLayoutEffect 和 useEffect 的区别是什么
useEffect 会在组件渲染完成后异步执行，不会阻塞组件的渲染过程，因此适用于大多数副作用操作。
而 useLayoutEffect 会在组件渲染完成后同步执行，会阻塞组件的渲染过程，因此只适用于那些需要立即同步更新 DOM 的操作。
也就是说，在大多数情况下，应该优先使用 useEffect，只有在需要同步更新 DOM 或者执行具有阻塞特性的副作用操作时，才应该使用 useLayoutEffect。

28.useRef 一般怎么使用
获取 DOM 元素的引用：您可以使用 useRef Hook 获取一个 DOM 元素的引用
存储任意值的引用：除了存储 DOM 元素的引用外，useRef 还可以存储任意值的引用

29.redux 三大原则 1.单一数据源 2.状态是只读的 不能直接改变状态 只能通过提交一个 action 来改变
3.reducer 是纯函数

30.什么是纯函数 1.相同的输入始终产生相同的输出。 2.函数执行过程中没有副作用，不会修改任何外部状态。 3.函数不依赖于外部状态，只依赖于输入参数。
纯函数是指在相同的输入下，总是返回相同的输出，并且没有副作用的函数。
也就是说，纯函数不会修改传递给它的参数或全局变量，也不会读取除了参数以外的任何状态。

31.instanceOf typeOf 的原理和作用 Object.prototype.toString()
instanceOf 原理是检查对象的原型链上是否有构造函数的原型 但是没办法判断基本数据类型 因为基本数据类型没有原型链
typeOf 可判断出 number, string, object(无法分辨是[] {}), boolean, function, undefined,symbol
其实，js 在底层存储变量的时候，会在变量的机器码的低位 1-3 位存储其类型信息
000：对象 010：浮点数 100：字符串 110：布尔 1：整数 undefined  和 null  来说，这两个值的信息存储是有点特殊的。
null：所有机器码均为 0
undefined：用 −2^30 整数来表示

32.怎么实现无感刷新 token 1.在接口请求前判断 token 是否过期 jwt 无状态 2.请求后根据返回状态判断是否过期，过期则刷新 在响应拦截器中根据返回状态刷新 token

32.SEO 方案，白帽和黑帽：
SEO（Search Engine Optimization）指的是通过优化网站以提高在搜索引擎中的排名和可见性。
白帽 SEO 是指遵守搜索引擎规则和道德准则的优化方法
黑帽 SEO 是指使用违反搜索引擎规则和不道德的手段进行优化

33.SSR 和 SSG
SSR 的优点是可以在初始加载时提供完整的渲染页面，有利于搜索引擎优化（SEO）和首次加载性能。但是每个页面请求都需要服务器进行渲染，对服务器资源造成一定的压力。
SSG 是一种在构建时生成静态 HTML 文件的渲染方式。，应用程序在构建过程中（通常是在部署之前）预先生成所有页面的静态 HTML 内容。这意味着在用户请求页面时，服务器只需返回预先生成的静态文件，而不需要进行实时的数据获取和模板渲染

34.Webpack 和 Vite
在传统的构建工具中（如 Webpack），当你编写代码并启动开发服务器时，构建工具会将所有的模块打包成一个或多个文件，然后将这些文件发送给浏览器。这些文件通常被转换成另一种模块格式（例如 CommonJS 或 AMD），以便浏览器能够加载和执行它们。
而 Vite 采用了一种不同的策略。它利用了现代浏览器对 ES 模块的原生支持。当你启动 Vite 开发服务器时，它会分析你的代码，并将每个模块都转换为原生的 ES 模块格式（使用 ES6 的 import 和 export 语法）。然后，Vite 将这些模块作为独立的文件交付给浏览器。
由于现代浏览器已经原生支持 ES 模块，所以它们能够直接加载和执行这些模块，而无需进行额外的转换或打包。这就意味着 Vite 在开发过程中避免了传统构建工具进行全量打包的开销，从而提供了更快的冷启动和热重载能力。
简而言之，Vite 利用现代浏览器对 ES 模块的原生支持，直接将模块交付给浏览器，从而避免了传统构建工具的繁重打包过程

35.let const var
let :块级作用域 不可重复声明 可重新赋值
const:块级作用域 不可重复声明 不可重新赋值 （花括号内 如函数 if 的括号
var:函数作用域 可重复声明 可重新赋值 （函数内有效

36.css 选择器优先级
!important>行内样式>ID 选择器>类、伪类、属性>元素、伪元素>关系选择器、通配符

37.数组遍历方法支持提前打断的有哪些
some（true） every（false） for（break）

38.为什么 number 和 string 都可以使用 toString 方法
当我们调用 toString() 方法时，JavaScript 会暂时将原始数据类型包装成对应的 Number 或 String 对象，然后调用对象上的 toString() 方法。

39.rem 和 em 的区别
rem 相对于根元素的字体大小进行计算
em 相对于父元素的字体大小进行计算

40.对象遍历方法
Object.keys()
Object.values()
for...in 可以遍历到原型链上的属性
Object.entries()

41.Set WeakSet Map WeakMap
Set 是一种存储唯一值的集合，即其中的成员没有重复值 add delete has
WeakSet 它只能存储对象引用，而不能存储原始类型的值,WeakSet 中的对象是弱引用，即如果对象在其他地方没有被引用，它可以被垃圾回收。
比如 dom 元素，dom 元素存在的时候需要存储一个数据 但是 dom 被销毁了就不需要了 用 WeakMap 就可以自动回收 用 Map 的话自身就算一次引用 并不会被 gc 回收
Map 是一种键值对的集合，其中每个键都是唯一的，即键和值之间的映射是一对一的关系 get set has delete
WeakMap 是一种特殊的映射，它只能存储对象引用作为键，而且键是弱引用，不会阻止对象被垃圾回收。

42.BFC
BFC 全称是 Block Formatting Context，即块级格式化上下文
BFC 称为块级格式化上下文，是 CSS 中的一种渲染机制。是一个独立的渲染区域(也可以理解为结界)，规定了内部元素如何布局，并且盒子内部元素与外部元素互不影响。
BFC 的布局规则：
BFC 就是一个块级元素，块级元素会在垂直方向一个接一个的排列
BFC 就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签
垂直方向的距离由 margin 决定， 属于同一个 BFC 的两个相邻的标签外边距会发生重叠
计算 BFC 的高度时，浮动元素也参与计算

触发 BFC 的属性：
overflow: hidden
position: absolute
position: fixed
display: inline-block
display: table-cell
display: flex

BFC 的作用：
BFC 清除浮动 解决高度塌陷问题
阻止普通文档流元素被浮动元素覆盖
同时，由于 BFC 的隔离作用，可以利用 BFC 包含一个元素，防止这个元素与 BFC 外的元素发生外边距折叠 解决普通文档流块元素的外边距折叠问题

43.垃圾回收机制
标记清除算法(主流)：
垃圾收集器在运行时会给内存中的所有变量都加上一个标记，假设内存中所有对象都是垃圾，全标记为0
然后从各个根对象开始遍历，把不是垃圾的节点改成1
清理所有标记为0的垃圾，销毁并回收它们所占用的内存空间
最后，把所有内存中对象标记修改为0，等待下一轮垃圾回收
缺点：在清除之后，剩余的对象内存位置是不变的，也会导致空闲内存空间是不连续的，出现了内存碎片 标记整理（Mark-Compact）算法 就可以有效地解决

引用计数算法：它的策略是跟踪记录每个变量值被使用的次数  
当声明了一个变量并且将一个引用类型赋值给该变量的时候这个值的引用次数就为 1
如果同一个值又被赋给另一个变量，那么引用数加 1
如果该变量的值被其他的值覆盖了，则引用次数减 1
当这个值的引用次数变为 0 的时候，说明没有变量在使用，这个值没法被访问了，回收空间，垃圾回收器会在运行的时候清理掉引用次数为 0 的值占用的内存
 v8(新生代(使用区 空闲区)老生代) 使用区空闲区置换   

 44.原型链
引用数据类型都有一个隐式原型属性__proto___属性，该属性的值是一个对象，而该对象也有__proto__属性
构造函数的实例化对象的__proto__属性指向构造函数的原型prototype
比如有个Person函数 实例化一个对象叫Tom 假如Tom身上没有age这个属性 他就会顺着__proto__属性往上链式寻找 直到null
 
 45.['1', '2', '3'].map(parseInt) what & why ?
 parseInt接受两个参数 一个是当前项一个是转化为几进制
 parseInt('1', 0) //radix为0时，且string参数不以“0x”和“0”开头时，按照10为基数处理。这个时候返回1
 parseInt('2', 1) //基数为1（1进制）表示的数中，最大值小于2，所以无法解析，返回NaN
 parseInt('3', 2) //基数为2（2进制）表示的数中，最大值小于3，所以无法解析，返回NaN
 
 46.介绍下深度优先遍历和广度优先遍历，如何实现？
 深度优先：找到一个节点后，把它的后辈都找出来，最常用递归法。
 广度优先：找到一个节点后，把他同级的兄弟节点都找出来放在前边，把孩子放到后边，最常用 while

 47.html语义化
 header nav main article aside footer 
 1.方便理解和阅读
 2.易修改易维护
 2.方便SEO(搜索引擎优化)