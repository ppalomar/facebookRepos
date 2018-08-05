import { createSelector } from 'reselect';

const getRepos = state => state.Scenes.RepoList.repos;

const sortFunc = (a, b) => b.watchers - a.watchers;

export const getSortedReposSelector = createSelector(
    getRepos,
    repos => repos.sort(sortFunc),
  )