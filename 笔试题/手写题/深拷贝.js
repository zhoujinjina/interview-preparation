function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const clonedObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    clonedObj[key] =obj[key]
  }
  return clonedObj;
}
let person = {
  name: "John",
  age: "16",
};
let clone = deepClone(person);
clone.name = "jbs";
console.log(clone);
console.log(person);
// function deepClone(obj){
//   if(obj===null||typeof obj!=='object'){
//       return obj
//   }
//   const clone=Array.isArray(obj)?[]:{}
//   let keys=Object.keys(obj)//返回的是属性的数组 所以下面的循环用of
//   for(let key of keys){
//       clone[key]=obj[key]
//   }
//   return clone

// }
// let person={
//   name: 'John',
//   age: 36,
// }
// let clone=deepClone(person)
// person.age=12
// console.log(person)
// console.log(clone)