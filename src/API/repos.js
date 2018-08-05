import axios from './base';

import { DEFAULT_ORG } from 'config';

const getOrg = org => !org ? DEFAULT_ORG : org;

export const getRepos = (org = undefined) 
    => axios.get(`/orgs/${getOrg(org)}/repos`);

export const getRepoDetail = (params, org = undefined) 
    => axios.get(`/repos/${getOrg(org)}/${params.repoName}`);
