import axios from './base';

import { DEFAULT_ORG } from 'config';

const getOrg = org => !org ? DEFAULT_ORG : org;

export const getRepos = (org = undefined) => axios.get(`/orgs/${getOrg(org)}/repos`);

export const getRepoDetail = (repoName, org = undefined) => axios.get(`/repos/${getOrg(org)}/${repoName}`);

export const getContributors = (repoName, org = undefined) => axios.get(`/repos/${getOrg(org)}/${repoName}/contributors`);
