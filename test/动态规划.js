function maxSum(arr) {
  let sum = 0,
    now = 0;
  for (let i of arr) {
    if (now < 0) {
      now = 0;
    }
    now += i;
    if (now > sum) {
      sum = now;
    }
  }
  return sum;
}
// 最大和
