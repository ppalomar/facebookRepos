import React from 'react';

import './index.css';

const RepoRow = ({ repoName, goDetail }) => {
  return (
    <div className="repo-row__container" onClick={() => goDetail(repoName)}>
      <span className="repo-name">{repoName}</span>
    </div>
  );
};

export default RepoRow;
