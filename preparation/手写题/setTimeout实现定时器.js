function mySetTimeout(func, timeout) {
  function myFun() {
    func();
    myInterval = setTimeout(myFun, timeout);
  }
  var myInterval = setTimeout(myFun, timeout);
  return () => {
    clearTimeout(myInterval);
  };
}
let m = mySetTimeout(() => {
  console.log("hello world");
}, 1000);
setTimeout(() => {
  m();
}, 10000);

