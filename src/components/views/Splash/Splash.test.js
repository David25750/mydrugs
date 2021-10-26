import React from 'react';
import { shallow } from 'enzyme';
import { SplashComponent } from './Splash';

describe('Component Splash', () => {
  it('should render without crashing', () => {
    const component = shallow(<SplashComponent />);
    expect(component).toBeTruthy();
  });
});
