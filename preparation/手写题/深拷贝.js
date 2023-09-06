function deepClone(obj, weakMap = new WeakMap()) {  
  if (obj == null || typeof obj !== "object") {  
    return obj;  
  }  
    
  if (weakMap.has(obj)) {  
    return weakMap.get(obj);  
  }  
    
  let clone = Array.isArray(obj) ? [] : {};  
  weakMap.set(obj, clone);  
    
  for (let key in obj) {  
    if (Object.prototype.hasOwnProperty.call(obj, key)) {  
      clone[key] = deepClone(obj[key], weakMap);  
    }  
  }  
    
  return clone;  
}
// 这个函数使用了一个 WeakMap 来跟踪已经复制过的对象。在复制对象时，如果该对象已经在 WeakMap 中存在，就直接返回该对象的复制结果，避免了重复复制。这样就可以避免循环引用的问题。
