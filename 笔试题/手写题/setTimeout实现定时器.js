function myInterval(func, time){
    function myFunc(){
        func()
        setTimeout(myFunc,time)
    }
    setTimeout(myFunc, time)
}