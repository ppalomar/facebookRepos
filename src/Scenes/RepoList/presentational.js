import React, { Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import RepoRow from './components/RepoRow';
import RepoDetail from './components/RepoDetail';
import './presentational.css';

const RepoListStateless = ({ loading, repos, seletedRepo, goDetail }) => {
  const isEmpty = repos.length === 0;

  const list = (
    <Fragment>
      {repos.map(({ name }) => (
        <RepoRow key={name} repoName={name} seletedRepo={seletedRepo} goDetail={goDetail} />
      ))}
    </Fragment>
  );

  return (
    <div className="repos-list__container">
      <div className="left">
        {loading && isEmpty ? <CircularProgress size={50} /> : list}
      </div>
      <div className="right">
        <RepoDetail />
      </div>
    </div>
  );
};

export default RepoListStateless;
