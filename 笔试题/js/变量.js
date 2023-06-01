// console.log(a)//error
// let a=10

// console.log(b)//undefined
// var b=10
// function fn(){
//     console.log(b)//error
//     let b=11
//     // console.log(b) undefined
//     // var b=11
// }
// fn()
// console.log(b)

// c=10
// console.log(c)//10

// var d=100
// function boo(){
//     console.log(d)
//     setTimeout(()=>{
//         if(d){
//             d=12
//        }
//     },5000)
//     console.log(d)
// }
// boo()
// var P=122
// function dd(){
// return function H(){
//     console.log(P)
// }
// }
// dd()()
// function Person(){
   
// }
// Person.prototype.say=function(){
//     console.log("hello")
// }
// function Monkey(name){
//     this.name=name
//     this.to=function(){
//         console.log("fj")
//     }
// }
// const m=new Monkey()
// Monkey.apply(m,"dfj")
// console.log(m)
let arr=[1,2,3,4]
for(let i in arr){
    console.log(arr[i])
    if(i==3){
        console.log(arr[i+1])
    }
}