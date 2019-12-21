import { combineReducers } from 'redux';
import addText from './addText';
import filter from './filter';
import todos from './todos';

const todoApp = combineReducers({
  addText,
  filter,
  todos,
});

export default todoApp;
