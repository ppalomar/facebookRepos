import * as AT from './actionTypes';

export function fetchRepos() {
  return {
    type: AT.REPOS_FETCH,
  };
}

export function fetchReposSuccess(payload) {
  return {
    type: AT.REPOS_FETCH_SUCCESS,
    repos: payload.data
  };
}

export function fetchReposFailed(error) {
  console.error(error);
}

export function goRepoDetail(repo) {
  return {
    type: AT.REPO_GO_DETAIL,
    repo,
  };
}
