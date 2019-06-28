import React from 'react';
import Cohort from './Cohort';
import { shallow } from 'enzyme';


describe('Cohort', () => {

  it('should render all components in correct order', () => {
    const component = shallow(
      <Cohort group={[]} groupType={'Staff'}/>
    )
    expect(component).toMatchSnapshot()
  })

})