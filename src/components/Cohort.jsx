import React from 'react';
import Person from './Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE

function Cohort(props) {
  console.log('Render Cohort')
  const groupMembers = props.group.map(person => <Person person={person} key={person.id}/>)

  return (
    <main>
      <h1>{props.groupType}</h1>
      <section className='people'>
      {groupMembers}
      </section>
    </main>
  )
}


export default Cohort;