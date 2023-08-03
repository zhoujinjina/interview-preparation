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


const deepC=(obj)=>{
if(obj==null||typeof obj!="object")return obj
  let cloneObj=Array.isArray(obj)?[] : {};
  for(let i in obj) {
    cloneObj[i] = deepClone(obj[i]);
  }

  return cloneObj;

}

let arr=[1,2,3,4,44,[3,4,4,5]]
let newArr=deepC(arr)
console.log(newArr)
arr=[1,2]
console.log(newArr)