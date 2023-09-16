

let array = [1, 2, 3, 2, 1, 4, 5, 4];  
let uniqueArray = array.filter((value, index, self) => {  
    return self.indexOf(value) === index;  
});  