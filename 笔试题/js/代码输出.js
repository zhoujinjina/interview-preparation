// async function a(){
//     console.log("1")
//     await b()
//     console.log(2)
//     Promise.resolve(1110).then(a=>console.log(a))
//     }
//     async function b(){
//        console.log(3)
//     }
    
//     a()
//     Promise.resolve(10).then(a=>console.log(a))
//     console.log(4)
//     //await会阻塞函数里面的代码，去处理后面的同步代码 非同步代码放到对应队列中
//     //  再回去处理后面的代码 代码中有微任务宏任务添加到队列 同步任务直接输出
//     a().then(data=>console.log(data))
//     // data看异步函数有没有返回值 然后判断是否为Promise 是值就相当于Promise.resolve(data) 
async function fj(){
    await new Promise(res=>{
        console.log(11121)
    })
    console.log(1111)
}
//假如异步函数中await的是个Promise而且没有状态 后面的代码就不执行 
fj()
