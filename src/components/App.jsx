import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import AddPerson from './AddPerson.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      group: people.staff,
      groupType: 'Staff',
      isHidden: true
    }
  }

  setGroup = (group) => {
    if(group === 'staff') {
      this.setState({
        group: people.staff,
        groupType: 'Staff'
      })
    } else {
      this.setState({
        group: people.students,
        groupType:'Students'
      })
    }
  }

  handleAdd = () => {
    this.setState({isHidden: !this.state.isHidden})
  }

  addStudent = (name, quote, superlative) => {

    this.state.group.push({
      id: Date.now(), 
      name: name, 
      quote: quote, 
      superlative: superlative, 
      photo: 'https://placekitten.com/200/300'})

  }

  render() {
    console.log('Render App')
    return (
      <div className='App'>
        {!this.state.isHidden && <AddPerson 
          addStudent={this.addStudent} 
          hide={this.handleAdd}/>}
        <header className='App-header'>
        <h1>Turing Yearbook</h1>
        <div className='selectors'>
          <button 
            className='group-selector' 
            onClick={()=>this.setGroup('staff')}>
            Staff
          </button>
          <button 
            className='group-selector' 
            onClick={()=>this.setGroup('students')}>
            Students
          </button>
          <img 
            id='add-student-icon'
            src='./add-user-button.png' 
            alt='Add student icon'
            onClick={this.handleAdd}
          />
        </div>
        </header>
        <Cohort group={this.state.group} groupType={this.state.groupType}/>
      </div>
    );
  }
}

export default App;
