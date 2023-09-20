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