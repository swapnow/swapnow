import React from 'react';
import Clipboard from 'clipboard';
import { IUser, IPost } from 'common/interfaces';
import { TableHeaders, DashboardHeaders } from 'common/components';
import { shortenString, timeFromNow } from 'helpers';
declare var window;

interface State {
  bookmarkedPosts: IPost [];
  title: any;
  description: any;
  price: any;
  created_at: any;
}

class Bookmarks extends React.Component<any, State> {
  constructor(props) {
    super(props);

    this.state = {
      bookmarkedPosts: [],
      title: -1,
      description: -1,
      price: -1,
      created_at: -1
    }

    this.initializeClipboard = this.initializeClipboard.bind(this);
    this.fetchBookmarkedPosts = this.fetchBookmarkedPosts.bind(this);
    this.deleteBookmarkedPost = this.deleteBookmarkedPost.bind(this);
  }

  public fetchBookmarkedPosts() {
    $.ajax({
      method: "GET",
      url: "api/bookmarks",
      data: { access_token: this.props.user.auth.accessToken }
    }).then(bookmarkedPosts => this.setState({ bookmarkedPosts }))
  }

  public deleteBookmarkedPost(e, postId) {
    e.stopPropagation();

    $.ajax({
      type: "DELETE",
      url: `api/bookmarks/${postId}`,
      data: { access_token: this.props.user.auth.accessToken }
    }).then(this.fetchBookmarkedPosts)
  }

  public componentDidMount() {
    this.initializeClipboard();
    this.fetchBookmarkedPosts();
  }

  public initializeClipboard() {
    var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
      $(e.trigger).text("copied!")
      setTimeout(function(){ $(e.trigger).text("Copy Link"); }, 1000)
      e.clearSelection();
    });
  }

  public loadPost(id) {
    window.location.href = `#/posts/${id}`
  }

  public renderListItems() {
    return this.state.bookmarkedPosts.map(bookmarkedPost => (
      <tr key={`post${bookmarkedPost.id}`} onClick={() => this.loadPost(bookmarkedPost.id)}>
        <td><a href={`#/posts/${bookmarkedPost.id}`} ><img className="img img-responsive img-thumbnail-size" src={bookmarkedPost.img_url1}/></a></td>
        <td className="hidden-xs">{shortenString(bookmarkedPost.title, 25)}</td>
        <td className="hidden-xs" id="hide-description">{shortenString(bookmarkedPost.description, 30)}</td>
        <td className="hidden-xs">${Number(bookmarkedPost.price).toLocaleString()}</td>
        <td className="hidden-xs">{timeFromNow(bookmarkedPost.created_at)}</td>
        <td><button type="button" className="btn btn-xs btn-primary" data-clipboard-text={window.localhost_url + `/#/posts/${bookmarkedPost.id}`} onClick={e => e.stopPropagation()}>Copy Link</button></td>
        <td><button type="button" className="btn btn-xs btn-secondary" onClick={(e) => this.deleteBookmarkedPost(e, bookmarkedPost.id)}>Delete</button></td>
      </tr>
    ))
  }

  public render() {
    const headers = ['title', 'description', 'price', 'created_at'];

    return (
      <div>
        <div className="container">
          <DashboardHeaders />
          <div>
            <div className="panel panel-default">
              <div className="panel-body">
                <table className="table table-hover">
                  <TableHeaders context={this} array={this.state.bookmarkedPosts} headers={headers} />

                  <tbody>
                    {this.renderListItems()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookmarks;
