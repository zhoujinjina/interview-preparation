function myDeepClone(obj, map = new WeakMap()) {
  if (obj == null || typeof obj !== "object") {
    return obj;
  }
  if (map.has(obj)) {
    return map.get(obj);
  }
  let newObj = Array.isArray(obj) ? [] : {};
  map.set(obj, newObj);
  for (let i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      newObj[i] = myDeepClone(obj[i], map);
    }
  }
  return newObj;
}
let tom = { name: "tome" };
tom.__proto__.age = 12;

let newTom = myDeepClone(tom);
console.log(newTom);
tom.name = "tom2";
console.log(newTom);
console.log(newTom.__proto__==Object.prototype);
