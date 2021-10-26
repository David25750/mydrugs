import React from 'react';
import { shallow } from 'enzyme';
import { HomepageComponent } from './Homepage';

const mockProps = {
  drugs: [
    {
      _id: 'zw12346533qe',
      name: 'Test test',
    },
  ],
  loading: {
    active: false,
  },

};

describe('Component Homepage', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomepageComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
