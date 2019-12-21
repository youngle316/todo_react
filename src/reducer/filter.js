import { SET_FILTER } from '../actions/actionTypes';

const filter = (state = 'all', action) => {
  if (action.type === SET_FILTER) {
    return action.filter;
  }
  return state;
};

export default filter;
