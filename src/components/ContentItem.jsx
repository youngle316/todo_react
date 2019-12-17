import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ContentItem extends PureComponent {
  render() {
    const { item, onClick } = this.props;
    const { text, complete } = item;
    return (
      <li
        style={{ textDecoration: complete === true ? 'line-through' : 'none' }}
        onClick={onClick}
      >
        {text}
      </li>
    );
  }
}

ContentItem.propTypes = {
  item: PropTypes.instanceOf(Array).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContentItem;
