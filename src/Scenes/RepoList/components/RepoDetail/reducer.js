import * as AT from './actionTypes';

export const INITIAL_STATE = {
  repoDetail: undefined,
  contributors: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AT.REPO_DETAIL_FETCH_SUCCESS:
      return {
        ...state,
        repoDetail: action.repo,
      };
    case AT.CONTRIBUTORS_FETCH_SUCCESS:
      return {
        ...state,
        contributors: action.contributors,
      };
    default:
      return state;
  }
};
