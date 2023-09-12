let arr=[1,22,3,33,3,3,3]
console.log(arr.reduce((pre,n,index,arr)=>{
    if(index==1){
        arr[index]=220
    }
    return pre+n
},10))
console.log(arr)