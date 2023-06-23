function myMap(arr,callback){
    let result=[]
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i],i,arr))
    }
    return result
}
let arr=[1,2,3]
console.log(myMap(arr,(item)=>{
    return item*2
}))//[2,4,6]

function myReduce(arr,callback,init){
    let result=init?init:arr[0]
    let i=init?0:1
    console.log(result,i)
for(i;i<arr.length;i++){
    result=callback(result,arr[i])
}
return result
}

console.log(myReduce(arr,(pre,item)=>{
    return pre+item
}))