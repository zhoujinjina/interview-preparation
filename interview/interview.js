function filter(str) {
  const map = new Map();
  for (let i of str) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }

  const arr = [...new Set(str)];
  console.log(map);
  console.log(arr);
  let n;//最小
  let min = map.get(arr[0]);
  for (let i of arr) {
    if (map.get(i) < min) {
      min = map.get(i);
      n = i;
    } else if (map.get(i) == min) {
      n += i;
    }
  }
  const newArr = Array.from(str).map((item) => {
    if (![...n].includes(item)) {
      return item;
    }
  });
  return newArr.join("");
}
console.log(filter("aaabbbccteeff156546"));
let fh = [1, 22, 3];
console.log(Object instanceof Object);

