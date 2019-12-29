import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  TODO_TEXT,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from './actionTypes';

let nextTodoId = 0;

const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});

const fetchTodosSuccess = (data) => ({
  type: FETCH_TODOS_SUCCESS,
  data,
});

const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  error,
});

export const fetchTodos = () => (dispatch) => {
  dispatch(fetchTodosRequest());
  return fetch('./mock/todos.json').then(
    (response) => {
      response.json().then((data) => {
        dispatch(fetchTodosSuccess(data));
      });
    },
    (error) => {
      dispatch(fetchTodosFailure(error));
      console.log(`An Error occurred: ${error}`);
    },
  );
};

/**
 * 新增待办事项
 * @param text 待办事项文本
 * @returns {{id: number, text: *, type: string}}
 */
export const addTodo = (text) => ({
  type: ADD_TODO,
  // eslint-disable-next-line no-plusplus
  id: nextTodoId++,
  text,
});

/**
 * 切换待办事项状态
 * @param id 待办事项的 id
 * @returns {{id: *, type: string}}
 */
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

/**
 * 设置过滤条件
 * @param filter 过滤条件
 * @returns {{filter: *, type: string}}
 */
export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

/**
 * 待办事项的文本
 * @param text 待办事项的文本
 * @returns {{text: *, type: string}}
 */
export const todoText = (text) => ({
  type: TODO_TEXT,
  text,
});
