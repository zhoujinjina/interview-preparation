let a=[1,3,42,3,3,2,[32,3,23,[32,33,[32,3,[3]]]]]
console.log(a.toString())
let b=a.toString().split(",")
console.log(b)
let c=[1,2,3,4,5,6]
// bind apply call 都是构造函数调用 然后调用的时候this指向参数
// bind函数是生成一个新的函数this指向参数
// call和apply函数都是执行一遍构造函数
function Person(name,age){
    console.log(this.name)
    console.log(this.age)
    this.name=name
    this.age=age
}
let person={name: "John", age:19}
 const newPerson=Person.bind(person)
newPerson()
let as=Person.call(person,12,13)
console.log(person)
console.log(as)
// 添加新元素并返回被删除的元素  
let arr = ["apple", "banana", "cherry", "date", "elderberry"];  
removed = arr.splice(2, 1);   
console.log(removed); // [ 'apple', 'date', 'blueberry', 'cinnamon', 'elderberry' ]
