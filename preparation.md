1.说说事件循环：
事件循环是javascript处理异步操作的机制，当我们执行异步操作时，javascript会将回调函数添加到事件队列中，等待后续执行。
事件循环会不断从事件队列中取出事件，执行函数，并等待新的事件加入事件队列    
执行当前调用栈中的所有同步任务；

执行所有微任务队列中的微任务，直到队列为空；

从宏任务队列中取出优先级最高的任务，执行其回调函数；

如果宏任务执行过程中产生了新的微任务，将它们添加到微任务队列中；

返回第 2 步，继续执行微任务队列中的任务，直到队列为空。

需要注意的是，事件循环的过程是不断循环执行的，直到事件队列中没有任务为止。在 JavaScript 中，宏任务包括 setTimeout、setInterval、setImmediate、requestAnimationFrame、I/O 操作等，微任务包括 Promise、MutationObserver 等。

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
get请求的查询参数在暴露url中，并且受到url长度的限制，post的请求参数在请求体中，比较安全，get请求的结果会被浏览器缓存，post请求每次都需要服务器返回
