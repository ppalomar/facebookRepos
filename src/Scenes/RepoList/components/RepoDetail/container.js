import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchRepoDetail, fetchContributors } from './actions';

import StatelessComponent from './presentational';

const stateToProps = ({ Scenes }, { match }) => ({
  match,
  repoDetail: Scenes.RepoDetail.repoDetail,
  contributors: Scenes.RepoDetail.contributors,
});

const dispatchToProps = dispatch => ({
  onLoad: repoName => {
    dispatch(fetchRepoDetail(repoName));
    dispatch(fetchContributors(repoName));
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  onLoad: () => {
    const { repoName } = stateProps.match.params;
    if(repoName !== undefined)
      dispatchProps.onLoad(repoName);
  },
});

class RepoDetail extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return StatelessComponent(this.props);
  }
}

RepoDetail.propTypes = {
  ...StatelessComponent.propTypes,
  onLoad: PropTypes.func.isRequired,
};

export default withRouter(connect(stateToProps, dispatchToProps, mergeProps)(RepoDetail));
