import { combineReducers } from 'redux';
import { reducer as repoListReducer } from './RepoList/reducer';

export const reducer = combineReducers({
  RepoList: repoListReducer,
});
