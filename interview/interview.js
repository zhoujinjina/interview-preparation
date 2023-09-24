let array = [1, 2, 3, 2, 1, 4, 5, 4];  

let uniqueArray = array.filter((value, index, self) => {  
    return self.indexOf(value) === index;  
})
const newArr = array.reduce((acc, value) => acc.includes(value)  ? acc: [...acc,value], [2]);

let flat=(arr)=>{
    return arr.reduce((acc, value) =>Array.isArray(value)?acc.concat(flat(value)):[...acc,value],[])
}
console.log(flat([[1,2,3,4],3,4,5,7,[6,5,[6,5,[5,6,5]]]]))
let a=Symbol(2)
let b=Symbol(2)
console.log(a)
console.log(b==a)
