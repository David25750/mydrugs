import React from 'react';
import { shallow } from 'enzyme';
import { SetNumberComponent } from './SetNumber';
// import { IsoTwoTone } from '@material-ui/icons';

describe('Test SetNumber Component', () => {
  it('should render correctly without errors', () => {
    const component = shallow(<SetNumberComponent />);
    expect(component).toBeTruthy(); // expect(component).toBeDefined();  <- ??? CL
  });
});
