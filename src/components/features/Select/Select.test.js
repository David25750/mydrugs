import React from 'react';
import { shallow } from 'enzyme';
import { SelectComponent } from './Select';



describe('Test Choosen Component', () =>  {
  it('should render correctly without errors', () => {
    const component = shallow(<SelectComponent />);
    expect(component).toBeTruthy();
  });
});


