//最大回文子串
var longestPalindrome = function(s) {
  let max = ''

  for(let i=0; i< s.length; i++) {
      // 分奇偶， 一次遍历，每个字符位置都可能存在奇数或偶数回文
      helper(i, i)
      helper(i, i+1)
  }

  function helper(l, r) {
      // 定义左右双指针
      while(l>=0 && r< s.length && s[l] === s[r]) {
          l--
          r++
      }
      // 拿到回文字符， 注意 上面while满足条件后多执行了一次，所以需要l+1, r+1-1
      const maxStr = s.slice(l + 1, r + 1 - 1);
      // 取最大长度的回文字符
      if (maxStr.length > max.length) max = maxStr
  }
  return max
};

//括号匹配
var isValid = function(s) {
  let arr=[...s]
  let stack=[];
  let pop
for(let i of arr){
      switch(i){
          case ")": pop=stack.pop(); if(pop=="("){break;}else{stack.push(pop)} 
          case "]": pop=stack.pop(); if(pop=="["){break;}else{stack.push(pop)} 
          case "}":  pop=stack.pop();if(pop=="{") {break;}else{stack.push(pop)} 
         default: stack.push(i)
      }
}
return !stack.length
};
console.log(isValid("({{{{}}}))"))
var threeSum = function(nums) {
  let pre;
  let max=[]
   for(let i=0;i<nums.length;i++){
for(let b=i+1;b<nums.length;b++){
  for(let a=b+1;a<nums.length;a++){
    pre=[nums[i],nums[b],nums[a]].sort()
      if(nums[i]+nums[b]+nums[a]==0&&max.indexOf(pre)==-1){
          max.push(pre)
      }
  }
}
       
   }
   return max
};
console.log(threeSum([-1,0,1,2,-1,-4]))