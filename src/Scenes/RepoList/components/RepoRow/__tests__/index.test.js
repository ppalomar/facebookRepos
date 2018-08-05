import React from 'react';
import { shallow } from 'enzyme';

import RepoRow from '../index';

describe('RepoRow', () => {
  it('renders properly with basic props', () => {
    const props = {
      repoName: 'pablo_test',
      goDetail: () => {},
    };

    const wrapper = shallow(<RepoRow {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('when click on repo should trigger onClick', () => {
    const props = {
      repoName: 'pablo_test',
      goDetail: jest.fn(),
    };

    const root = shallow(<RepoRow {...props} />);
    root.find('.repo-row__container').simulate('click');
    expect(props.goDetail).toHaveBeenCalledWith(props.repoName);
  });
});
