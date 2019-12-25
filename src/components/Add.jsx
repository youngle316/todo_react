import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Add extends PureComponent {
  onHandleChange = (e) => {
    const { todoText } = this.props;
    todoText(e.target.value);
  };

  handleClick = () => {
    const { addTodo, addText } = this.props;
    addTodo(addText);
  };

  render() {
    const { addText } = this.props;
    return (
      <div>
        <input value={addText} onChange={this.onHandleChange} />
        <button type="button" onClick={this.handleClick}>
          ADD
        </button>
      </div>
    );
  }
}

Add.propTypes = {
  addText: PropTypes.instanceOf(String).isRequired,
  addTodo: PropTypes.func.isRequired,
  todoText: PropTypes.func.isRequired,
};

export default Add;
