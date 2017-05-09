import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SignUp from 'modules/signup'

interface RootProps {
  store: Store<any>;
}

const Root: React.SFC<RootProps> = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/signup" component={SignUp} />
      </Router>
    </Provider>
  );
};

export default Root;