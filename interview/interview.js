function mergeSort(arr) {  
  // 基本情况：如果数组只有一个元素，那么它已经排序好了  
  if (arr.length <= 1) {  
    return arr;  
  }  
    
  // 将数组分割成两部分  
  const middle = Math.floor(arr.length / 2);  
  const left = arr.slice(0, middle);  
  const right = arr.slice(middle);  
    
  // 递归地对左右两部分进行排序  
  const sortedLeft = mergeSort(left);  
  const sortedRight = mergeSort(right);  
    
  // 合并两个已排序的数组  
  return merge(sortedLeft, sortedRight);  
}  
  
function merge(left, right) {  
  let result = [];  
  let i = 0; // 指向左边数组的索引  
  let j = 0; // 指向右边数组的索引  
    
  // 当两个数组都有剩余元素时，选择较小的元素加入结果数组  
  while (i < left.length && j < right.length) {  
    if (left[i] < right[j]) {  
      result.push(left[i]);  
      i++;  
    } else {  
      result.push(right[j]);  
      j++;  
    }  
  }  
    
  // 如果左边数组还有剩余元素，将它们加入结果数组  
  while (i < left.length) {  
    result.push(left[i]);  
    i++;  
  }  
    
  // 如果右边数组还有剩余元素，将它们加入结果数组  
  while (j < right.length) {  
    result.push(right[j]);  
    j++;  
  }  
    
  return result;  
}