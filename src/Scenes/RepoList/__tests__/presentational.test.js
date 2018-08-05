import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';

import RepoList from '../presentational';

describe('RepoRow', () => {
  it('renders progress component when loading is true', () => {
    const props = {
      loading: true,
      repos: [],
      goDetail: () => {},
      onShowMore: () => {},
    };

    const wrapper = shallow(<RepoList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders list of repos when loading is false', () => {
    const props = {
      loading: false,
      repos: [
        {
          name: 'Pablo',
        },
        {
          name: 'Cristina',
        },
      ],
      goDetail: () => {},
      onShowMore: () => {},
    };

    const wrapper = shallow(<RepoList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
