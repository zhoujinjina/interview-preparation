function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.say=function(){
    console.log("Hello")
}
function Dog(){
 //假如在函数内部定义this.bark是不会将方法挂载到原型对象中的，只会在实例对象中，每创建一个对象就创建一个函数
}
Dog.prototype.bark=function(){
    console.log("狗叫")
  }

let dog = new Dog()
Dog.prototype.__proto__=Person.prototype
let Li={}
Li.__proto__=Dog.prototype
Li.say()
Li.bark()
dog.say()
dog.bark()
// dog.say()