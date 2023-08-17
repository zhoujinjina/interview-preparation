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
  let n;//最小的字母
  let min = map.get(arr[0]);//初始化最小为第一个字符的个数
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
let fh = new Map([[1,2],[3,4],[5,6]])
console.log(fh)
const myMap = new Map();
myMap.set('key1', 5);
myMap.set('key2', 3);
myMap.set('key3', 8);

// 将键值对转换为数组，并按值进行排序
const sortedArray = Array.from(myMap).sort((a, b) => a[1] - b[1]);

// 创建一个新的 Map 对象，按排序后的数组重新设置键值对
const sortedMap = new Map(sortedArray);

// 输出排序后的 Map 对象
for (const [key, value] of sortedMap) {
  console.log(`${key}: ${value}`);
}
let a=[[1,2],[1,22],[2,3],[3,14],3]
 a.sort((a,b)=>a[1]-b[1])
console.log(1-a[4][1])
 console.log(a)


