import React from 'react';

import './index.css';

const RepoRow = ({ repoName, seletedRepo, goDetail }) => {
  const isSelected = repoName === seletedRepo;
  return (
    <div 
      className={`repo-row__container ${isSelected ? 'selected' : ''}`} 
      onClick={() => goDetail(repoName)}>
      <span className='repo-name'>{repoName}</span>
    </div>
  );
};

export default RepoRow;
