import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';

import './index.css';

import Error404 from 'Components/Error404';
import AsyncComponent from 'Components/HOC/AsyncComponent';

import { store, history } from './store';

import registerServiceWorker from './registerServiceWorker';

const AsyncRepoList = AsyncComponent(() =>
  import(/* webpackChunkName: "RepoDetail" */ 'Scenes/RepoList')
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path={`/:repoName`} component={AsyncRepoList} />
        <Route exact path={`/`} component={AsyncRepoList} />
        <Route component={Error404} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
