import { TODO_TEXT } from '../actions/actionTypes';

const addText = (state = '', action) => {
  if (action.type === TODO_TEXT) {
    return action.text;
  }
  return state;
};

export default addText;
