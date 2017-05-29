import { connect } from 'react-redux';
import { Dispatch } from 'react-redux';
import { IUser, IStoreState } from 'common/interfaces';
import Dashboard from './component';
import { 
  fetchBookmarks, deleteBookmark, 
  fetchMyPosts, deleteMyPost,
  fetchRfps, deleteRfps, receiveRfps
} from './actions';

interface StateProps {
  user : IUser;
  dashboard: any; // TODO: update
}

interface DispatchProps {
  fetchBookmarks: (accessToken: string) => void;
  deleteBookmark: (id: number, accessToken: string) => void;
  fetchMyPosts: (accessToken: string) => void;
  deleteMyPost: (id: number, accessToken: string) => void;
  fetchRfps: (accessToken: string) => void;
  deleteRfps: (id: number, accessToken: string) => void;
  receiveRfps: (rfps: any) => void;
}

const mapStateToProps = (state: IStoreState, ownProp?: any): StateProps => ({
  user: state.user,
  dashboard: state.dashboard
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>): DispatchProps => ({
  fetchBookmarks: accessToken => dispatch(fetchBookmarks(accessToken)),
  deleteBookmark: (id, accessToken) => dispatch(deleteBookmark(id, accessToken)),
  fetchMyPosts: accessToken => dispatch(fetchMyPosts(accessToken)),
  deleteMyPost: (id, accessToken) => dispatch(deleteMyPost(id, accessToken)),
  fetchRfps: (accessToken) => dispatch(fetchRfps(accessToken)),
  deleteRfps: (id, accessToken) => dispatch(deleteRfps(id, accessToken)),
  receiveRfps: (rfps) => dispatch(receiveRfps(rfps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);