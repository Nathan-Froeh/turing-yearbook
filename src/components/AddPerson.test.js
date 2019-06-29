import React from 'react';
import AddPerson from './AddPerson';
import {shallow} from 'enzyme';


describe('AddPerson', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <AddPerson addStudent={jest.fn()} hide={jest.fn()}/>
    )
})

  it('should render all components in order', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('name input should run handleChange on keystroke', () => {
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Nathan'
      },
      preventDefault: jest.fn()
    }
    const expected = {
      name: 'Nathan',
      quote: '',
      superlative: ''
    }
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expected)
  })

  
}) 