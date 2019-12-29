import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ContentItem from './ContentItem';

class ContentList extends PureComponent {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  render() {
    const { todoList, toggleTodo } = this.props;
    return (
      <div>
        <ul>
          {todoList.map((item) => (
            <ContentItem
              key={item.id}
              item={item}
              onClick={() => toggleTodo(item.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ContentList.propTypes = {
  todoList: PropTypes.instanceOf(Array).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
};

export default ContentList;
