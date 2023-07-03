const quickSort=(arr,n=0)=>{
    if(arr.length==0) return arr
    let ns=arr[n]
    let newArr=arr.splice(n,1)
    let left=[],right=[]
    for(let i of arr){
       if(i>ns){
        right.push(i)
       }else{
        left.push(i)
       }
    }
    return [...quickSort(left),ns,...quickSort(right)]
}
console.log(quickSort([1,3,5,3,7,8,4,-1,-5,3,6,5]))