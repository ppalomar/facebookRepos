import { call, put, takeLatest } from 'redux-saga/effects';

import { 
  getRepoDetail as API_fetchRepoDetail,
  getContributors as API_fetchContributors,
 } from 'API/repos';
import * as Actions from './actions';
import { REPO_DETAIL_FETCH, CONTRIBUTORS_FETCH } from './actionTypes';

function* fetchRepoDetail(action) {
  const { repoName } = action;
  try {
    const repo = yield call(API_fetchRepoDetail, repoName);
    yield put(Actions.fetchRepoDetailSuccess(repo));
  } catch (e) {
    yield put(Actions.fetchRepoDetailFailed(e));
  }
}

function* fetchContributors(action) {
  const { repoName } = action;
  try {
    const contributors = yield call(API_fetchContributors, repoName);
    yield put(Actions.fetchContributorsSuccess(contributors));
  } catch (e) {
    yield put(Actions.fetchContributorsFailed(e));
  }
}

function* saga() {
  yield takeLatest(REPO_DETAIL_FETCH, fetchRepoDetail);
  yield takeLatest(CONTRIBUTORS_FETCH, fetchContributors);
}

export default saga;
