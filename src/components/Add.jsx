import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Add extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      addText: '',
    };
  }

  onHandleChange = (e) => {
    this.setState({
      addText: e.target.value,
    });
  };

  render() {
    const { addText } = this.state;
    const { addTodo } = this.props;
    return (
      <div>
        <input value={addText} onChange={this.onHandleChange} />
        <button type="button" onClick={() => addTodo(addText)}>ADD</button>
      </div>
    );
  }
}

Add.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Add;
