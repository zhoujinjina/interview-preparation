let array = [1, 2, 3, 2, 1, 4, 5, 4];  

let uniqueArray = array.filter((value, index, self) => {  
    return self.indexOf(value) === index;  
})
const newArr = array.reduce((acc, value) => acc.includes(value)  ? acc: [...acc,value], [2]);

let flat=(arr)=>{
    return arr.reduce((acc, value) =>Array.isArray(value)?acc.concat(flat(value)):[...acc,value],[])
}
console.log(flat([[1,2,3,4],3,4,5,7,[6,5,[6,5,[5,6,5]]]]))
let a=Symbol(2)
let b=Symbol(2)
console.log(a)
console.log(b==a)
// actions.js  
export const fetchPosts = () => ({ type: 'FETCH_POSTS' });  
  
// sagas.js  
import { call, put } from 'redux-saga/effects';  
import Api from '...';  
  
function* fetchPostsWorker(action) {  
  const response = yield call(Api.fetchPosts);  
  yield put({ type: 'FETCH_POSTS_SUCCESS', payload: response });  
}  
  
function* watchFetchPosts() {  
  yield takeEvery('FETCH_POSTS', fetchPostsWorker);  
}  
  
export default function* rootSaga() {  
  yield all([watchFetchPosts()]);  
}  
  
// store.js  
import { createStore, applyMiddleware } from 'redux';  
import createSagaMiddleware from 'redux-saga';  
import rootReducer from './reducers';  
import rootSaga from './sagas';  
  
const sagaMiddleware = createSagaMiddleware();  
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));  
sagaMiddleware.run(rootSaga);
function isPalindrome(str) {  
    // 将字符串转换为小写并去除空格和标点符号  
    str = str.toLowerCase().replace(/[\s\p{Punct}]/gu, '');  
    
    // 使用双指针法进行比较  
    let left = 0;  
    let right = str.length - 1;  
    
    while (left < right) {  
      if (str.charAt(left) !== str.charAt(right)) {  
        return false;  
      }  
      left++;  
      right--;  
    }  
    
    return true;  
  }
  javascript
function knapsack(items, capacity) {  
  const n = items.length;  
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));  
  
  for (let i = 1; i <= n; i++) {  
    const { weight, value } = items[i - 1];  
    for (let j = 1; j <= capacity; j++) {  
      if (weight <= j) {  
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);  
      } else {  
        dp[i][j] = dp[i - 1][j];  
      }  
    }  
  }  
  
  return dp[n][capacity];  
}  