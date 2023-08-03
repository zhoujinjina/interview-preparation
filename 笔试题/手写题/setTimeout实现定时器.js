function myInterval(func, time){
    function myFunc(){
        func()
        Tid=setTimeout(myFunc,time)
    }
    var Tid=setTimeout(myFunc, time)
    return ()=>{
        clearTimeout(Tid)
    }
}
var clearInterval=myInterval(()=>{
    console.log("Hello world!")
},1000)

setTimeout(()=>{
    clearInterval()
},10000)