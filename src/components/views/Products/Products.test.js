

import React from 'react';
import { shallow } from 'enzyme';
import { ProductsComponent } from './Products';


describe('Test Items Component', () =>  {
  it('should render correctly without errors', () => {
    const component = shallow(<ProductsComponent />);
    expect(component).toBeTruthy();
  });
});


