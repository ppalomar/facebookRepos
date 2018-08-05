import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchRepos, goRepoDetail } from './actions';
import { getSortedReposSelector } from './selectors';

import StatelessComponent from './presentational';

const stateToProps = (state, { history, match }) => ({
  loading: state.Scenes.RepoList.loading,
  history,
  match,
  repos: getSortedReposSelector(state),
});

const dispatchToProps = dispatch => ({
  onLoad: repoName => {
    dispatch(fetchRepos());
    if(repoName) dispatch(goRepoDetail(repoName));
  },
  goDetail: repoName => dispatch(goRepoDetail(repoName)),
  onShowMore: since => dispatch(fetchRepos({ since }, true)),
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  goDetail: repoName => {
    const { history } = stateProps;
    history.push(`${repoName}`);
    dispatchProps.goDetail(repoName);
  },
});

class ReposList extends Component {
  componentDidMount() {
    const { repoName } = this.props.match.params;
    this.props.onLoad(repoName);
  }

  render() {
    return StatelessComponent(this.props);
  }
}

ReposList.propTypes = {
  ...StatelessComponent.propTypes,
  onLoad: PropTypes.func.isRequired,
};

export default connect(stateToProps, dispatchToProps, mergeProps)(ReposList);
