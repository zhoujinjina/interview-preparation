function flat(arr){
     return arr.reduce((pre,cur)=>Array.isArray(cur)?pre.concat(flat(cur)):pre.concat(cur),[])
}
let arr=[1,3,[[2,33,33],[[1,2,3]]]]
console.log(flat(arr))