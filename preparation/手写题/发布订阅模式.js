class observe {
  constructor() {
    this.messages = [];
  }
  // 订阅事件
  on(type, func) {
    if (!this.messages[type]) {
      this.messages[type] = [];
    }
    this.messages[type].push(func);
  }
  // 取消订阅事件
  off(type, func) {
    if (!this.messages[type]) return;
    if (func) {
      this.messages[type] = this.messages[type].filter((item) => item !== func);
    } else {
      this.messages[type] = undefined;
    }
  }
  //触发事件
  emit(type) {
    this.messages[type]&&this.messages[type].forEach(func=>{func()})
}
}
let tom=new observe()
tom.on("eat",function(){
    console.log("我吃饭啦")
})
tom.emit("eat")
tom.on("eat",()=>{
    console.log("我真的吃饭咯")
})
tom.emit("eat")
tom.off("eat")
tom.emit("eat")