import { saga as repoListSaga } from 'Scenes/RepoList';
import { saga as repoDetailSaga } from 'Scenes/RepoList/components/RepoDetail';

const sagas = [repoListSaga, repoDetailSaga];

export default sagas;
