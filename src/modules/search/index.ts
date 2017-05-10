import { connect } from 'react-redux';
import Search from './component';
import { search } from './actions';

interface StateProps {
  user: object;
  searchResult: object [];
}

interface DispatchProps {
  onClick1: () => void;
}

const mapStateToProps = (state: any, ownProp?: any): StateProps => ({
  user: state.user,
  searchResult: state.searchResult
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  search: (query: string) => dispatch(search(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
