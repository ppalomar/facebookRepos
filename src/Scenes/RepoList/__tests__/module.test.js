import * as actions from '../actions';
import * as AT from '../actionTypes';
import { reducer, INITIAL_STATE } from '../reducer';

describe('UserList', () => {
  describe('Action Creators', () => {
    it('REPOS_FETCH - No append', () => {
      const fetchRepos = actions.fetchRepos();
      expect(fetchRepos).toHaveProperty('type', AT.REPOS_FETCH);
    });

    it('REPOS_FETCH_SUCCESS', () => {
      const fakePayload = { data: 'whatever' };
      const fetchReposSuccess = actions.fetchReposSuccess(fakePayload);
      expect(fetchReposSuccess).toHaveProperty('type', AT.REPOS_FETCH_SUCCESS);
      expect(fetchReposSuccess).toHaveProperty('repos', fakePayload.data);
    });

    it('REPO_GO_DETAIL', () => {
      const fakeRepo = 'whatever';
      const goRepoDetail = actions.goRepoDetail(fakeRepo);
      expect(goRepoDetail).toHaveProperty('type', AT.REPO_GO_DETAIL);
      expect(goRepoDetail).toHaveProperty('repo', fakeRepo);
    });
  });

  describe('Reducer', () => {
    it('return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('handle REPOS_FETCH', () => {
      const fetchRepos = actions.fetchRepos();
      expect(reducer(undefined, fetchRepos)).toEqual({
        ...INITIAL_STATE,
        loading: true,
      });
    });

    it('handle REPOS_FETCH_SUCCESS', () => {
      const fakeParams = { data: [1, 2, 3] };
      const fetchReposSuccess = actions.fetchReposSuccess(fakeParams);
      expect(reducer(undefined, fetchReposSuccess)).toEqual({
        ...INITIAL_STATE,
        loading: false,
        repos: [1, 2, 3],
      });
    });

    it('handle REPO_GO_DETAIL', () => {
      const fakeRepo = 'Pablo';
      const goRepoDetail = actions.goRepoDetail(fakeRepo);
      expect(reducer(undefined, goRepoDetail)).toEqual({
        ...INITIAL_STATE,
        selectedRepo: fakeRepo,
      });
    });
  });
});
