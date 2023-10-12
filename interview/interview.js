let arr=[1,2,3,4,4,5,3,23,54,34,45,2]
function quickSort(arr){
  if(arr.length<=1){
    return arr
  }
  let mid=arr.splice(0,1)[0]
  let left=[],right=[]
  for(let i of arr){
    if(i>mid){
      right.push(i)
    }else{
      left.push(i)
    }
  }
  return [...quickSort(left),mid,...quickSort(right)]
}
console.log(quickSort(arr))