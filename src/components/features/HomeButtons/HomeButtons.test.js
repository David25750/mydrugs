import React from 'react';
import { shallow } from 'enzyme';
import { HomeButtons } from './HomeButtons';


describe('Test MainPageButtons Component', () => {
  it('should render correctly without errors', () => {
    const component = shallow(<HomeButtons />);
    expect(component).toBeTruthy();
  });
});
