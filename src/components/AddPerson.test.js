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

  it('quote input should run handleChange on keystroke', () => {
    const mockEvent = {
      target: {
        name: 'quote',
        value: 'I am Batman'
      },
      preventDefault: jest.fn()
    }
    const expected = {
      name: '',
      quote: 'I am Batman',
      superlative: ''
    }
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expected)
  })

  it('superlative input should run handleChange on keystroke', () => {
    const mockEvent = {
      target: {
        name: 'superlative',
        value: 'I like turtles'
      },
      preventDefault: jest.fn()
    }
    const expected = {
      name: '',
      quote: '',
      superlative: 'I like turtles'
    }
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expected)
  })

  it('handleAdd should run on form submit', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleAdd');
    const mockEvent = {
      target: {
        type: 'submit',
        value: 'Submit'
      },
      preventDefault: jest.fn()
    }
    expect(spy).not.toHaveBeenCalled()
    wrapper.instance().handleAdd(mockEvent)
    expect(spy).toHaveBeenCalled()
  })

}) 