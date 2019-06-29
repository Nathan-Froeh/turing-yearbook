import React from 'react';
import AddPerson from './AddPerson';
import {shallow} from 'enzyme';


describe('AddPerson', () => {

  it('should render all components in order', () => {
    const wrapper = shallow(
      <AddPerson addStudent={jest.fn()} hide={jest.fn()}/>
    )
    expect(wrapper).toMatchSnapshot()
  })


}) 