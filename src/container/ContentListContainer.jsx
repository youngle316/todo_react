import { connect } from 'react-redux';
import ContentList from '../components/ContentList';
import { toggleTodo } from '../actions';

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
  todoList: getVisibleTodos(state.todos, state.filter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
