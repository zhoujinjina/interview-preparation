function quickSort(arr,index=0){
    if(arr.length<=1)return arr;
      let left=[]
      let right=[]
      let start=arr.splice(index,1)[0]
      for(let i =0;i<arr.length;i++){
        if(arr[i]<start){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
      }
      return [...quickSort(left),start,...quickSort(right)]
}
let arr=[3,5,2,35,646,75,675,8,5,4,6,446]
console.log(quickSort(arr))