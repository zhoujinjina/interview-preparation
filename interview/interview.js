function findKthLargest(nums, k) {  
    let arr = nums.slice();  
    let left = 0;  
    let right = arr.length - 1;  
      
    while (left <= right) {  
      let pivotIndex = partition(arr, left, right);  
      if (pivotIndex === k - 1) {  
        return arr[pivotIndex];  
      } else if (pivotIndex < k - 1) {  
        left = pivotIndex + 1;  
      } else {  
        right = pivotIndex - 1;  
      }  
    }  
      
    return null;  
  }  
    
  function partition(arr, left, right) {  
    let pivot = arr[right];  
    let i = left;  
    for (let j = left; j < right; j++) {  
      if (arr[j] <= pivot) {  
        [arr[i], arr[j]] = [arr[j], arr[i]];  
        i++;  
      }  
    }  
    [arr[i], arr[right]] = [arr[right], arr[i]];  
    return i;  
  }