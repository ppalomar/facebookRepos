import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './presentational.css';

const RepoDetailStateless = ({ repoDetail, contributors }) => {
  const empty = <div className='repo-detail__empty'> Click in a repo in the list to view details </div>;

  const contributor= (c) => <div className='contributor'>
    <Avatar alt={c.login} src={c.avatar_url} />
    <span>Login: {c.login}</span>
    <span>Contributions: {c.contributions}</span>
  </div>

  const contributorsList = <div className='contributors'>
    <h4>Contributors List</h4>
    {contributors.map(contributor)}
  </div> ;
  
  return !repoDetail ? empty : (
    <div className="repo-detail__container">
      <h1> Name: { repoDetail.name }</h1>
      <div> Type: { repoDetail.private ? 'Private' : 'Public' } </div>
      <div> Watchers: { repoDetail.watchers } </div>
      <div> Description: { repoDetail.description } </div>
      <div> Html Url: { repoDetail.html_url } </div>
      {contributorsList}
    </div>
  );
};

export default RepoDetailStateless;
