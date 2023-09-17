let array = [1, 2, 3, 2, 1, 4, 5, 4];  

let uniqueArray = array.filter((value, index, self) => {  
    return self.indexOf(value) === index;  
})
const newArr = array.reduce((acc, value) => acc.includes(value)  ? acc: [...acc,value], [2]);
console.log(newArr)
