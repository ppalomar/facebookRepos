import * as AT from './actionTypes';

export const INITIAL_STATE = {
  loading: false,
  repos: [],
  selectedRepo: undefined,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AT.REPOS_FETCH:
      return {
        ...state,
        loading: true,
      };
    case AT.REPOS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.repos,
      };
    case AT.REPO_GO_DETAIL:
      return {
        ...state,
        selectedRepo: action.repo,
      };
    default:
      return state;
  }
};
