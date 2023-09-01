function change(str){
  let arr=Array.from(str)
  arr=arr.reverse()
  let newArr=[]
  let count=0
  for(let i=0;i<arr.length;i++){
      if(count%3==0&&count!=0){
          newArr.push(",")
      }
      newArr.push(arr[i])
      count++
  }
  return newArr.reverse().join('')
}
console.log(change("1234567890.122"))