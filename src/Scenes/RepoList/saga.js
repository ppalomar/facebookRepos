import { call, put, takeLatest } from 'redux-saga/effects';

import { getRepos as API_fetchRepos } from 'API/repos';
import * as Actions from './actions';
import { REPOS_FETCH } from './actionTypes';

function* fetchRepos() {
  try {
    const payload = yield call(API_fetchRepos);
    yield put(Actions.fetchReposSuccess(payload));
  } catch (e) {
    yield put(Actions.fetchReposFailed(e));
  }
}

function* saga() {
  yield takeLatest(REPOS_FETCH, fetchRepos);
}

export default saga;
