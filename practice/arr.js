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
  for (let i = 0; i < str.length; i++) {
    now = [];
    right = i;
    left = i - 1;
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
console.log(longestString("sjsajdlkadksasdfjlkasdfjjjda"));

