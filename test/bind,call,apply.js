let a=[1,3,42,3,3,2,[32,3,23,[32,33,[32,3,[3]]]]]
console.log(a.toString())
let b=a.toString().split(",")
console.log(b)
let c=[1,2,3,4,5,6]
// bind apply call 都是构造函数调用 然后调用的时候this指向参数
// bind函数是生成一个新的函数this指向参数
// call函数是
function Person(name,age){
    console.log(this.name)
    console.log(this.age)
    this.name=name
    this.age=age
    return {}
}
let person={name: "John", age:19}
const newPerson=Person.bind(person)
newPerson()
let as=Person.call(person,12,13)
console.log(person)
console.log(as)
let aa=new Person("1",1)
console.log(aa)