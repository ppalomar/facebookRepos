import { combineReducers } from 'redux';
import { reducer as repoListReducer } from './RepoList/reducer';
import { reducer as repoDetailReducer } from './RepoList/components/RepoDetail/reducer';

export const reducer = combineReducers({
  RepoList: repoListReducer,
  RepoDetail: repoDetailReducer,
});
