const obj = {
    prop1: 'value1',
    prop2: 'value2',
  };
  
  Object.defineProperty(obj, 'prop3', {
    value: 'value3',
    enumerable: false, // 不可枚举属性
  });
  
  Object.prototype.prop4 = 'value4'; // 原型链上的属性
  
  // for...in 循环
  console.log('for...in:');
  for (let key in obj) {
    console.log(key); // 输出 'prop1', 'prop2', 'prop4'
  }
  
  // Object.keys()
  console.log('Object.keys():');
  const keys = Object.keys(obj);
  console.log(keys); // 输出 ['prop1', 'prop2']
  
  // Object.values()
  console.log('Object.values():');
  const values = Object.values(obj);
  console.log(values); // 输出 ['value1', 'value2']
  
  // Object.entries()
  console.log('Object.entries():');
  const entries = Object.entries(obj);
  console.log(entries); // 输出 [['prop1', 'value1'], ['prop2', 'value2']]
  
  // 不可枚举的属性
  console.log('Object.getOwnPropertyNames():');
  const allProperties = Object.getOwnPropertyNames(obj);
  console.log(allProperties); // 输出 ['prop1', 'prop2', 'prop3']