import React, { Component } from 'react';
import Add from '../components/Add';
import ContentList from '../components/ContentList';
import Footer from '../components/Footer';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: 'all',
    };
    this.nextTodoIds = 0;
  }

  /**
   * 根据过滤条件显示对应的待办事项
   * @param todos 所有的待办事项
   * @param filter 过滤条件
   * @returns {*}
   */
  getVisibleTodo = (todos, filter) => todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.complete;
    }
    if (filter === 'complete') {
      return todo.complete;
    }
    return true;
  });

  /**
   * 添加待办事项
   * @param text 待办事项内容
   */
  addTodo = (text) => {
    const { todos } = this.state;
    const todo = {
      // eslint-disable-next-line no-plusplus
      id: this.nextTodoIds++,
      text,
      complete: false,
    };
    const newTodos = [todo, ...todos];
    this.setState({
      todos: newTodos,
    });
  };

  /**
   * 过滤条件按钮选择
   * @param filter
   */
  onChangeFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  /**
   * 待办事项的状态切换
   * @param id
   */
  toggleTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    const { todos, filter } = this.state;
    const filterTodos = this.getVisibleTodo(todos, filter);
    return (
      <div>
        <Add addTodo={this.addTodo} />
        <ContentList todoList={filterTodos} toggleTodo={this.toggleTodo} />
        <Footer filter={filter} onChangeFilter={this.onChangeFilter} />
      </div>
    );
  }
}

export default App;
