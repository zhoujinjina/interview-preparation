function Foo() {
    getName = function () {
        console.log('1');
    };
    return this;
}
globalThis.getName=function(){
    console.log("globalThis");
}
Foo.getName = function () {
    console.log('2');
};
Foo.prototype.getName = function () {
    console.log('3');
};
var getName = function () {
    console.log('4');
};
function getName() {
    console.log(5);
}
Foo.getName(); //2
getName();     //4
Foo().getName();  // 1 not a function
getName();   //1
new Foo.getName(); // 2
new Foo().getName();  // 3
new new Foo().getName(); // 3

console.log(Foo()==globalThis)
console.log(new Foo())