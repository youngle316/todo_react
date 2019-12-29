import { connect } from 'react-redux';
import ContentList from '../components/ContentList';
import { toggleTodo, fetchTodos } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'complete':
      return todos.filter((todo) => todo.complete);
    case 'active':
      return todos.filter((todo) => !todo.complete);
    default:
      return new Error(`UnKnow filter${filter}`);
  }
};

const mapStateToProps = (state) => ({
  todoList: getVisibleTodos(state.todos.data, state.filter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
