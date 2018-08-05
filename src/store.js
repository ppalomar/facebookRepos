import {
  createStore as _createStore,
  applyMiddleware as _applyMiddleware,
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import createBrowserHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';

import { 
  middleware as repoDetailMiddleware
 } from 'Scenes/RepoList/components/RepoDetail/middleware';
import sagas from './sagas';
import { rootReducer } from './reducers';

function applyMiddleware(...middlewares) {
  return composeWithDevTools(_applyMiddleware(...middlewares));
}

function createStore() {
  const sagaMiddleware = createSagaMiddleware();
  const history = createBrowserHistory();
  const store = _createStore(rootReducer, applyMiddleware(sagaMiddleware, repoDetailMiddleware));

  return { sagaMiddleware, history, store };
}

const { sagaMiddleware, history, store } = createStore();

sagas.forEach(s => sagaMiddleware.run(s));

export { store, history };
