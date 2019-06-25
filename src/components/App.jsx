import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      group: people.staff
    }
  }

  setGroup = (group) => {
    if(group === 'staff') {
      this.setState({group: people.staff})
    } else {
      this.setState({group: people.students})
    }
  }

  render() {
    console.log('Render App')
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        <button onClick={()=>this.setGroup('staff')}>Staff</button>
        <button onClick={()=>this.setGroup('students')}>Students</button>
        </header>
        <Cohort group={this.state.group}/>
      </div>
    );
  }
}

export default App;
