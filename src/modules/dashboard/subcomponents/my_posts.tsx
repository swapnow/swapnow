import React from 'react';
import { shortenString, timeFromNow } from 'helpers';
import { IPost, IUser } from 'common/interfaces';
import { TableHeaders } from 'common/components';

interface Props {
  user: IUser;
  myPosts: {
    fetched: boolean;
    list: IPost[];
  };
  fetchMyPosts : (accessToken: string) => JQueryPromise<void>;
  deleteMyPost : (id: number, accessToken: string) => JQueryPromise<void>;
}

interface State {
  myPosts: IPost [];
  title: number;
  price: number;
  course: number;
  updated_at: number;
}

class MyPosts extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      myPosts: [],
      title: -1,
      price: -1,
      course: -1,
      updated_at: -1
    };

    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.renderMyPosts = this.renderMyPosts.bind(this);
    this.toggleActivation = this.toggleActivation.bind(this);
  }

  public componentDidMount() {
    let { myPosts, user, fetchMyPosts } = this.props;
    if (!myPosts.fetched) {
      fetchMyPosts(user.auth.accessToken).then(
        () => this.setState({ myPosts: this.props.myPosts.list })
      );
    }
  }

  public deletePost(e, id) {
    e.stopPropagation();

    let { deleteMyPost, user } = this.props;

    const access_token = this.props.user.auth.accessToken;

    deleteMyPost(id, user.auth.accessToken).then(
      () => this.setState({ myPosts: this.props.myPosts.list })
    );
  }

  public loadPost(id) {
    window.location.href = `#/posts/${id}`;
  }

  public editPost(e, id) {
    e.stopPropagation();
    window.location.href = `#/posts/edit/${id}`;
  }

  public toggleActivation(e, id, polarity) {
    e.stopPropagation();

    // let method = polarity == true ? "deactivate" : "activate";
    // const access_token = this.props.user.auth.accessToken;

    // $.ajax({
    //   type: "PATCH",
    //   url: `api/posts/${id}`,
    //   data: { access_token, method }
    // }).then(() => this.getMyPosts());
  }

  public renderListItem() {
    return this.state.myPosts.map(myPost => (
      <tr key={myPost.id} onClick={() => myPost.active ? this.loadPost(myPost.id) : null} className={myPost.active ? "" : "disabled"}>
        <td>
          <img className="img img-responsive img-thumbnail-size" src={myPost.img_url1}/>
        </td>
        <td className="hidden-xs">{shortenString(myPost.title, 30)}</td>
        <td className="hidden-xs">${Number(myPost.price).toLocaleString()}</td>
        <td className="hidden-xs">{timeFromNow(myPost.updated_at)}</td>

        <td>
          <button type="button" id="action-button" className="btn btn-xs btn-primary" onClick={(e) => this.editPost(e, myPost.id)}>
            Edit
          </button>
        </td>

        <td>
          <button type="button" id="action-button" className={`btn btn-xs ${myPost.active ? "btn-primary" : "btn-warning"}`} onClick={(e) => this.toggleActivation(e, myPost.id, myPost.active)}>
            {myPost.active ? "Active" : "Inactive"}
          </button>
        </td>

        <td>
          <button type="button" id="action-button" className="btn btn-xs btn-secondary" onClick={(e) => this.deletePost(e, myPost.id)}>
            Delete
          </button>
        </td>
      </tr>
    ))
  }

  public renderMyPosts() {
    let headers = ['title', 'price', 'updated_at'];
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <table className="table table-hover">
            <TableHeaders context={this} array={this.state.myPosts} headers={headers} />

            <tbody>
              {this.renderListItem()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">   
        {this.renderMyPosts()}
      </div>
    );
  }
}

export { MyPosts };