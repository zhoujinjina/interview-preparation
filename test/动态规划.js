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

console.log(maxSum([-1, 8, 4, -9, 0, 2, 1, 4, -2]));
