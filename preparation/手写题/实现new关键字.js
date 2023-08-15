//实现new关键字
const MyNew = (constructor, ...args) => {
  // 创建一个空对象，并将该对象的原型__proto__指向构造函数的原型prototype
  const obj = Object.create(constructor.prototype);
  //   const obj={}
  //  obj.__proto__=constructor.prototype
  // 将构造函数的 this 绑定到该对象上，并调用构造函数来初始化该对象的属性和方法
  const result = constructor.apply(obj, args); //obj就是构造函数中的this

  // 如果构造函数返回一个对象，则返回该对象；否则返回新创建的对象
  return Object(result) === result ? result : obj;
};
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p = MyNew(Person, "alice", 18);
console.log(p);
console.log(p instanceof Person);
