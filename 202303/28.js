//数组重排乱序
function generateRandomV1(num) {
    return num.sort(() => Math.random() - 0.5);
  }

  // 产生一个不重复的随机数组
//参数 数组长度 最小范围 最大范围
function randomUniqueArr(len = 100, min = 0, max = 200){
    if(max-min<len){
        return null
    }
    const Arr=[]
    let number;
    for(let i=0; i<len; i++){
        number=Math.floor(Math.random()*200)
        if(Arr.indexOf(number)==-1){
            Arr.push(number)
        }
    }
    return Arr
}
console.log(randomUniqueArr(3,1,10))

// 3. 无重复字符的最长子串
//主要思路：计算每一个字符开始的最大子串
var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1));
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};
 //generator 函数
//  generator函数跟普通函数在写法上的区别就是，多了一个星号*，并且只有在generator函数中才能使用yield，什么是yield呢
// ，他相当于generator函数执行的中途暂停点，比如下方有3个暂停点。
// 而怎么才能暂停后继续走呢？那就得使用到next方法，next方法执行后会返回一个对象，对象中有value 和 done两个属性
// value：暂停点后面接的值，也就是yield后面接的值
// done：是否generator函数已走完，没走完为false，走完为true
function* gen(){
    yield fn(1)
    yield 2
    yield 3
}
function fn(num) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(num)
      }, 1000)
    })
  }
console.log(gen().next().value)//1
console.log(gen().next()) // { value: 1, done: false }
console.log(gen().next()) // { value: 2, done: false }
console.log(gen().next()) // { value: 3, done: false }
console.log(gen().next()) // { value: undefined, done: true }
// gen()[a]("111")==gen().next("111") a="next"

///最大回文子串
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案

