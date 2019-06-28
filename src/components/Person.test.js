import React from 'react';
import Person from './Person';
import { shallow } from 'enzyme';


describe('Person', () => {

  it('should render all components in order', () => {
    const components = shallow(
      <Person 
      person={{name:'Nathan', quote:'', superlative:'', photo:''}} 
      key={1}/>
    )
    expect(components).toMatchSnapshot()
  })

})