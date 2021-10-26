import React from 'react';
import { shallow } from 'enzyme';
import { DrugsComponent } from './Drugs';

describe('Test Drugs Component', () => {
  it('should render correctly without errors', () => {
    const component = shallow(<DrugsComponent />);
    expect(component).toBeTruthy();
  });
});


