import React, { Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import RepoRow from './components/RepoRow';

import './presentational.css';

const RepoListStateless = ({ loading, repos, goDetail }) => {
  const isEmpty = repos.length === 0;

  const list = (
    <Fragment>
      {repos.map(({ name }) => (
        <RepoRow key={name} repoName={name} goDetail={goDetail} />
      ))}
    </Fragment>
  );

  return (
    <div className="repos-list__container">
      <div className="left">
        {loading && isEmpty ? <CircularProgress size={50} /> : list}
      </div>
      <div className="right">
      </div>
    </div>
  );
};

export default RepoListStateless;
