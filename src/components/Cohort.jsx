import React from 'react';
import Person from './Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE

function Cohort(props) {
  console.log('Render Cohort')
  const staffMembers = props.staff.map(person => <Person person={person} key={person.id}/>)

  return (
    <main>
      <h1>Staff</h1>
      <section className='people'>
      {staffMembers}
      </section>
    </main>
  )
}


export default Cohort;