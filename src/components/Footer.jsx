import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Footer extends PureComponent {
  render() {
    const { filter, onChangeFilter } = this.props;
    return (
      <div>
        <span>SHOW: </span>
        <button
          type="button"
          disabled={filter === 'all'}
          onClick={() => onChangeFilter('all')}
        >
          All
        </button>
        <button
          type="button"
          disabled={filter === 'complete'}
          onClick={() => onChangeFilter('complete')}
        >
          Complete
        </button>
        <button
          type="button"
          disabled={filter === 'active'}
          onClick={() => onChangeFilter('active')}
        >
          Active
        </button>
      </div>
    );
  }
}

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Footer;
