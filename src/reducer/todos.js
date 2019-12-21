import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state.todos,
        {
          action: action.id,
          text: action.text,
          complete: false,
        },
      ];
    case TOGGLE_TODO:
      return state.todos.map((todo) =>
        (todo.id === action.id ? { ...todo, complete: !todo.complete } : todo));
    default:
      return state;
  }
};

export default todos;
