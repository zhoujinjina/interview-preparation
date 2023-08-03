function binarySearch(array, target){
    let left=0,right=array.length-1
    while(left<right){
        middle=Math.floor((left+right)/2)
        if(array[middle]==target){
            return middle
        }else if(array[middle]>target){
            right=middle-1
        }else{
            left=middle+1
        }
    }
    return -1
}

console.log(binarySearch([1,5,6,8,9,44,45,46,78,90],60))