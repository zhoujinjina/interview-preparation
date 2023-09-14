const longestString = (str) => {
str=str.split('')
  let left, right;
  let maxLength = [];
  let now = [];
  for (let i = 0; i < str.length; i++) {
    now = [];
    right = i+1 ;
    left = i - 1;
    now.push(str[i]);
    while (left >= 0 && right < str.length) {
      if (str[left] == str[right]) {
        now.push(str[left]);
        now.unshift(str[right]);
        left--;
        right++;
      } else{
        break
      }
    }
    if (now.length > maxLength.length) {
        maxLength = now;
      }
  }
  return maxLength;
};
console.log(longestString("addaldad"));

var longestPalindrome = function(s) {
  if (s.length<2){
      return s
  }
  let res = ''
  for (let i = 0; i < s.length; i++) {
      // 回文子串长度是奇数
      helper(i, i)
      // 回文子串长度是偶数
      helper(i, i + 1) 
  }

  function helper(m, n) {
      while (m >= 0 && n < s.length && s[m] == s[n]) {
          m--
          n++
      }
      // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
      // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
      if (n - m - 1 > res.length) {
          // slice也要取[m+1,n-1]这个区间 
          res = s.slice(m + 1, n)
      }
  }
  return res
};

