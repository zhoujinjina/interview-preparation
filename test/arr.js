const longestString = (str) => {
str=str.split('')
  let left, right;
  let maxLength = [];
  let now = [];
  for (let i = 0; i < str.length; i++) {
    now = [];
    right = i+1 ;
    left = i - 1;
    now.push(str[i]);
    while (left >= 0 && right < str.length) {
      if (str[left] == str[right]) {
        now.push(str[left]);
        now.unshift(str[right]);
        left--;
        right++;
      } else{
        break
      }
    }
    if (now.length > maxLength.length) {
        maxLength = now;
      }
  }
  for (let i = 0; i < str.length; i++) {
    now = [];
    right = i;
    left = i - 1;
    while (left >= 0 && right < str.length) {
      if (str[left] == str[right]) {
        now.push(str[left]);
        now.unshift(str[right]);
        left--;
        right++;
      } else{
        break
      }
    }
    if (now.length > maxLength.length) {
        maxLength = now;
      }
  }
  return maxLength;
};
console.log(longestString("sjsajdlkadksasdfjlkasdffjjjjjjda"));

function Sum(...args){
    // 完善这个函数，实现 Sum 函数链式调用计算多数之和，可通过 sum()().value() 获取计算结果。
 let value = args.reduce((a, b) => a + b, 0);
     
     function sumFunc(...args) {
       value += args.reduce((a, b) => a + b, 0);
       return sumFunc;
     }
     
     sumFunc.value = function() {
       return value;
     };
     
     return sumFunc;
 }
console.log(  Sum(1)(2)(3, 4).value())
console.log(  Sum(1)(2)(3)(4)(5).value())
console.log( Sum(1,2)(3,4).value())
class Event {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(eventName, listener) {
      if (!this.listeners.has(eventName)) {
        this.listeners.set(eventName, []);
      }
      this.listeners.get(eventName).push(listener);
    }
  
    removeEventListener(eventName, listener) {
      if (this.listeners.has(eventName)) {
        const listeners = this.listeners.get(eventName);
        const index = listeners.indexOf(listener);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      }
    }
  
    addEventListenerOnce(eventName, listener) {
      const once = (...args) => {
        this.removeEventListener(eventName, once);
        listener(...args);
      };
      this.addEventListener(eventName, once);
    }
  
    removeAll(eventName) {
      this.listeners.delete(eventName);
    }
  
    emit(eventName, ...args) {
      if (this.listeners.has(eventName)) {
        const listeners = this.listeners.get(eventName);
        listeners.forEach(listener => listener(...args));
      }
    }
  }
const event = new Event();

