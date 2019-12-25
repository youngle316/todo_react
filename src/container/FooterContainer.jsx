import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { setFilter } from '../actions';

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
