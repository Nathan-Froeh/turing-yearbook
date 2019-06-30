import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import people from '../data/yearbook-data.js';


describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with all components in order', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('setGroup should change the group', () => {
    const expected1 = {
      group: people.staff,
      groupType: 'Staff',
      isHidden: true
    }
    const expected2 = {
      group: people.students,
      groupType: 'Students',
      isHidden: true
    }
    expect(wrapper.state()).toEqual(expected1)
    wrapper.instance().setGroup('students')
    expect(wrapper.state()).toEqual(expected2)
    wrapper.instance().setGroup('staff')
    expect(wrapper.state()).toEqual(expected1)
  })

  it('handleAdd should toggle isHidden', () => {
    expect(wrapper.state('isHidden')).toEqual(true)
    wrapper.instance().handleAdd()
    expect(wrapper.state('isHidden')).toEqual(false)
  })

  it('addStudent should add a student', () => {
    const person = ['Nathan', 'I am Batman',
      'I like turtles', Date.now()
    ]
    expect(wrapper.state('group').length).toEqual(13)
    wrapper.instance().addStudent(...person)
    expect(wrapper.state('group').length).toEqual(14)
  })

  it('click should run setGroup to students', () => {
    expect(wrapper.state('group')).toEqual(people.staff)
    wrapper.find('.students').simulate('click')
    expect(wrapper.state('group')).toEqual(people.students)
  })

  it('click should run setGroup to staff', () => {
    wrapper.instance().setState({group: people.students})
    expect(wrapper.state('group')).toEqual(people.students)
    wrapper.find('.staff').simulate('click')
    expect(wrapper.state('group')).toEqual(people.staff)
  })

})
