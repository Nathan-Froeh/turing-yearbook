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
  })

  it('handleAdd should toggle isHidden', () => {
    expect(wrapper.state('isHidden')).toEqual(true)
    wrapper.instance().handleAdd()
    expect(wrapper.state('isHidden')).toEqual(false)
  })

})
