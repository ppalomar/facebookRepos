import * as AT from './actionTypes';

export const INITIAL_STATE = {
  loading: false,
  repos: [],
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
    default:
      return state;
  }
};
