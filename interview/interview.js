var sortArray = function(nums) {
    let mid=nums[0]
    let right=[],left=[]
    nums.splice(0,1)
    for(let i of nums){
if(i<mid){
  left.push(i)
}else{
  right.push(i)
}
    }
    return [...sortArray(left),mid,...sortArray(right)]
};
console.log(sortArray([1,34,5,3,4,43,3]))