import { connect } from 'react-redux';
import Add from '../components/Add';
import { todoText, addTodo } from '../actions';

const mapStateToProps = (state) => ({
  addText: state.addText,
});

const mapDispatchToProps = (dispatch) => ({
  todoText: (text) => dispatch(todoText(text)),
  addTodo: (text) => dispatch(addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);
