import { createStore } from 'redux';
import rootReducer from './reducer';
import {
  addTodo, setFilter, todoText, toggleTodo,
} from './actions';

// 创建store
const store = createStore(rootReducer);

// 初始state
console.log('init store.getState()', store.getState());

// 订阅state的变化
const unsubscribe = store.subscribe(() => {
  console.log('store.getState()', store.getState());
});

// 触发action
store.dispatch(addTodo('Learn React'));
store.dispatch(toggleTodo(0));
store.dispatch(setFilter('active'));
store.dispatch(todoText('Learn Redux'));

// 取消订阅
unsubscribe();

export default store;
