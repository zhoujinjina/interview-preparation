1.说说事件循环：
事件循环是javascript处理异步操作的机制，当我们执行异步操作时，javascript会将回调函数添加到事件队列中，等待后续执行。
事件循环会不断从事件队列中取出事件，执行函数，并等待新的事件加入事件队列    
执行当前调用栈中的所有同步任务；

执行所有微任务队列中的微任务，直到队列为空；

从宏任务队列中取出优先级最高的任务，执行其回调函数；

如果宏任务执行过程中产生了新的微任务，将它们添加到微任务队列中；

返回第 2 步，继续执行微任务队列中的任务，直到队列为空。

需要注意的是，事件循环的过程是不断循环执行的，直到事件队列中没有任务为止。在 JavaScript 中，宏任务包括 setTimeout、setInterval、I/O 操作等，微任务包括 Promise等。

2.说说闭包
闭包是一个函数内又定义了一个函数，内部函数访问了外部函数的变量，就形成了闭包，闭包会形成私有空间，可以避免全局变量
的污染，可以持久化内存，保存数据，但是闭包容易造成内存泄漏
（首先是尽量避免闭包的使用，然后是及时释放不再使用的变量和对象，在使用完对象和变量后，及时将其赋值为null或者删除他们的引用）

3.jwt的使用 jwt.sign(Payload,secret key,{过期时间}) jwt.verify(token,secret key)
在服务端生成jwt之后将其返回客户端 客户端收到时将其保存在本地储存中(localStorage.setItem)
在请求数据时将jwt添加到请求头中，{headers:{Authorization:'Bearer '+localStorage.getItem('token')}} 
后端验证req.headers.Authorization jwt.verify  验证成功 req.username=""

4.垂直居中方案 absolute flex(父元素)

5.flex:1
它将会占据可用空间的所有剩余部分
flex-grow:1 有剩余空间时进行拉伸
flex-shrink:1 剩余空间不足时进行缩小
flex-basis:0% 这意味着元素在没有任何伸缩能力之前的初始大小为 0%

6.css隐藏元素方案
dispaly:none
opacity:0
visibility:hidden

7.说说浏览器输入地址后会发生的事情
输入地址后，浏览器会向服务器发起DNS请求得到响应的ip地址，之后会进行tcp三次握手与服务器连接，连接成功后会发出get请求，通常是一个html文件，服务器会根据响应头和html内容进行响应，浏览器得到数据后，会解析html得到DOM树，解析css得到CSSDOM树，然后将DOM树和CSSDOM树合并得到render树，然后会计算每个节点在页面中的位置和大小，得到布局树，最后根据布局树中的节点绘制到页面上，得到最终的视觉效果

8.get和post的区别
get请求常用于请求数据，post常用于写入数据
get请求的参数以查询字符串的方式暴露在url中，并且受到url长度的限制，
post的请求参数在请求体中，比较安全
get请求的结果会被浏览器缓存，post请求每次都需要服务器返回

9.ajax和axios的区别
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/resource?param1=value1&param2=value2', true);
xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
xhr.send();

10.介绍盒模型 
它将HTML元素看作是一个矩形的盒子，由内容区域，内边距，外边距，边框组成
可以使用box-sizing来设置盒模型的计算方式，content-box表示盒模型只包括内容区域，border-box表示包括内容区域，内边距和边框

11.介绍一下相对定位和绝对定位
相对定位是相对于元素在文档流中的初始位置进行定位的  
绝对定位是相对于已经定位的祖先元素进行定位的 假如没有已经定位的祖先元素 则相对于html进行定位

12.http状态码
1xx信息性状态码 表示服务器已经接受请求，正在处理请求，或者需要进一步的操作以完成请求
2xx成功状态码
3xx重定向状态码
4xx客户端错误状态码
5xx服务端错误状态码

13.常见的请求头
User-Agent 用于标识客户端的操作系统、浏览器和版本等信息
Accept 用于告知服务器客户端能够接受的数据类型，可以是HTML、XML、JSON等
Content-Type 用于告知服务器请求中的数据类型
Cache-Control 用于控制缓存的行为，如max-age、no-cache等
Connection 用于告知服务器客户端的连接类型，如keep-alive、close等。
Cookie 用于在客户端和服务器之间传递会话信息
Authorization 用于在请求中传递用户的身份认证信息
Referer 用于告知服务器请求的来源，即前一个页面的URL地址

14.webpack
打包流程：
1.读取配置文件，解析配置项
2.从入口文件开始，递归遍历所有模块
3.根据模块的类型，用相应的loader对模块进行编译
4.将编译后的模块组成chunk
5.根据output配置项，将chunk生成对应的文件

plugin和loader区别：
Plugin和Loader都是Webpack的扩展机制
loader是用于加载不同类型的模块，将它们转换成webpack可以处理的模块
Plugin则是用于扩展webpack的功能，例如优化、压缩、代码分离

常见的plugin和loader有哪些：
常见的Loader有：babel-loader、css-loader、style-loader、sass-loader、file-loader、url-loader等。
常见的Plugin有：HtmlWebpackPlugin、CleanWebpackPlugin、CopyWebpackPlugin、MiniCssExtractPlugin、UglifyJSPlugin等

热更新的原理：
首先，Webpack在编译时会为每个模块生成一个唯一的ID，以便在后续的模块替换中进行识别。
当一个模块发生变化时，Webpack会重新编译这个模块，然后将变化的部分打包成一个补丁（Patch）文件。
Webpack通过WebSocket与浏览器建立连接，将Patch文件推送给浏览器。
浏览器接收到Patch文件后，通过Webpack的HMR Runtime对模块进行更新，然后将更新后的模块插入到页面中，从而实现热更新的效果

15.网络安全
强制缓存和协商缓存
强制缓存：第一次向服务器请求资源之后，服务器会在响应头设置cache-control字段，告诉浏览器一定时间内可以直接从缓存中获取资源
协商缓存：当资源过期或者需要验证缓存是否有效时，浏览器发送请求会在请求头添加if-modified-since或if-none-match字段，服务器回根据字段判断资源是否需要重新获取，如果没有被修改，则返回304 not modified状态码，告诉浏览器可以直接从缓存中获取资源

JWT原理
由三部分组成：头部、荷载、签名
客户端向服务器发送请求，请求头中包括了JWT令牌
服务器验证JWT的合法性，如果验证通过，服务器可以根据荷载中的数据，判断用户的身份，获取数据

TCP三次握手
客户端向服务器发送一个SYN包请求连接，服务端收到后发送一个SYN包和ACK包给客户端，表示同意连接，并要客户端确认，客户端收到后再发送一个ACK包给服务端，表示建立成功

HTTP和HTTPS的区别
安全性：HTTP中数据传输是明文传输的，容易被窃听和篡改，而HTTPS通过SSL/TLS加密协议，保证通信的安全性
认证：HTTPS通过数字证书来认证Web服务器的身份，确保通信双方都是可信的，而HTTP没有提供身份认证的机制
端口：HTTP 80 HTTPS 443
性能：HTTPS在通信过程中需要加密和解密等操作，会导致通信性能降低
SEO：HTTPS被Google认为是一个重要的SEO信号，可以提升网站在搜索结果中的排名

16.基本数据类型和引用数据类型的区别
基本数据类型和引用数据类型的区别在于，基本数据类型存储在变量所在的内存中，
而引用数据类型存储在内存的堆内存中，变量中存储的是指向该内存地址的指针。
基本数据类型的变量是独立的，互不影响，而引用类型的变量可能会相互影响。

17.React
函数式编程和类式编程区别：
函数式编程和类式编程都是编程范式的一种，二者的主要区别在于编程风格和实现方式
函数式编程更加注重函数的输入和输出，强调数据流的处理方式。
类式编程更加注重对象间的交互和状态的变化，强调类和对象的状态和行为。

React和Vue区别：
模板语法：Vue使用模板语法，将JavaScript代码和HTML代码混合在一起，React则使用JSX语法，可以在JavaScript代码中直接嵌入HTML代码
组件化：Vue和React都支持组件式开发，Vue相对比较简单自然，React组件更加灵活和可扩展
性能：Vue使用模板语法，可以在编译时优化，在性能方面比React稍微快些，但是React使用虚拟DOM来减少不必要的DOM操作，因此在大规模复杂应用场景表现更好
生态系统：React的生态系统更加丰富和成熟，包括React Native、Redux、Next.js等，而Vue的生态系统则相对较小

useMemo：用于在函数组件中缓存计算结果，避免重复计算。
useCallback：用于在函数组件中缓存函数，避免函数重复创建

说一下diff算法：
当组件的状态或属性发生变化时，React会使用diff算法来计算出需要更新的DOM节点，从而实现高效的更新。diff算法的核心思想是将新旧两个虚拟DOM树进行比较，计算出需要更新的节点，然后批量更新DOM
diff算法的具体实现过程如下：
比较根节点：首先比较新旧两个虚拟DOM树的根节点，如果节点类型不同，则直接替换整个节点。如果节点类型相同，则比较属性和子节点。
比较属性：对于相同类型的节点，比较它们的属性是否有变化，如果有变化，则更新属性。
比较子节点：对于相同类型的节点，比较它们的子节点是否有变化。如果子节点相同，则继续递归比较子节点的属性和子节点。如果子节点不同，则直接替换子节点 