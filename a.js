let a=[1,3,42,3,3,2,[32,3,23,[32,33,[32,3,[3]]]]]
console.log(a.toString())
let b=a.toString().split(",")
console.log(b)
let c=[1,2,3,4,5,6]
let d=c.forEach(item=>{
   throw new Error
   console.log('111')
})
console.log(d)