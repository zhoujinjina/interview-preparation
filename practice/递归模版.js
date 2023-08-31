function f(a){
    if(a==0){
        return 0
    }
    if(a==1){
        return 1
    }
     
    return f(a-1)+f(a-2)
}
console.log(f(10))
console.log(['010','10','2','1','10'].map(parseInt))
// parseInt('1', 0) radix为0时，且string参数不以“0x”和“0”开头时，按照10为基数处理。这个时候返回1
console.log(parseInt(20,3))//2*3+2*0=6
// [10, NaN, 2, 3, 4]