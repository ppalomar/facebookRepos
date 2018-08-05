import * as AT from './actionTypes';

export function fetchRepoDetail(repoName) {
  return {
    type: AT.REPO_DETAIL_FETCH,
    repoName,
  };
}

export function fetchRepoDetailSuccess(payload) {
  return {
    type: AT.REPO_DETAIL_FETCH_SUCCESS,
    repo: payload.data,
  };
}

export function fetchRepoDetailFailed(error) {
  console.log(error);
}

export function fetchContributors(repoName) {
  return {
    type: AT.CONTRIBUTORS_FETCH,
    repoName,
  };
}

export function fetchContributorsSuccess(payload) {
  return {
    type: AT.CONTRIBUTORS_FETCH_SUCCESS,
    contributors: payload.data,
  };
}

export function fetchContributorsFailed(error) {
  console.log(error);
}
