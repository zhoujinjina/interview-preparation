let arr=[{key: 'a', value: 1}, 
{key: 'a', value: 2},
{key: 'a', value: '3'}, 
{key: 'b', value: 4}]
const concatA=(arr)=>{
    let newObj={}
    let key
    arr.map((item)=>{
        key=item.key
        if(Object.keys(newObj).includes(key)){
            if(Array.isArray(newObj[key])){
                newObj[key]=newObj[key].concat(parseInt(item.value))
            }else{
                newObj[key]=[newObj[key],parseInt(item.value)]
            }
            
        }else{
            newObj[key]=parseInt(item.value)
        }
    })
    return newObj
}
console.log(concatA(arr))//{ a: [ 1, 2, 3 ], b: 4 }
// const arrToObj = arr =>
//   arr.reduce((obj, { key, value }) => {
//     if (obj.hasOwnProperty(key)) {
//       obj[key].push(Number(value));
//     } else {
//       obj[key] = [Number(value)];
//     }
//     return obj;
//   }, {});

// const arr = [
//   { key: 'a', value: 1 },
//   { key: 'a', value: 2 },
//   { key: 'a', value: '3' },
//   { key: 'b', value: 4 }
// ];

// const obj = arrToObj(arr);
// console.log(obj); // 输出 {a: [1, 2, 3], b: [4]}