import { REPO_GO_DETAIL } from 'Scenes/RepoList/actionTypes';
import * as actions from './actions';

export const middleware = store => next => action => {
  switch (action.type) {
    case REPO_GO_DETAIL:
        store.dispatch(actions.fetchRepoDetail(action.repoName));
        store.dispatch(actions.fetchContributors(action.repoName));
        break;
    default:
      break;
  }
  next(action);
};
