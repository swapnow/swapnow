import React from 'react';

interface Props {
}

interface State {
}

class SearchSidebar extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-xs-12 col-md-2 menu">
        <dl>
          <dt>Categories</dt>
          <a href="#/textbooks"><dd>Textbooks</dd></a>
          <a href="#/clothing"><dd>Clothing</dd></a>
          <a href="#/furniture"><dd>Furniture</dd></a>
          <a href="#/electronics"><dd>Electronics</dd></a>
          <a href="#/kitchenware"><dd>Kitchenware</dd></a>
          <a href="#/games"><dd>Games</dd></a>
        </dl>
        <div className="input-group">
          <label htmlFor="search-input">Search</label>
          <input id="search-input" type="text" className="form-control" placeholder="Course Name" />
        </div>
        <br/>
      </div>
    );
  }
}

export { SearchSidebar };
