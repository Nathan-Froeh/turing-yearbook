import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE

function Person(props) {

  return(
    <article>
      <img src={props.person.photo} alt={'Photo of ' + props.name}/>
      <h2>{props.person.name}</h2>
      <p>{props.person.quote}</p>
      <h3>{props.person.superlative}</h3>
    </article>
  )
}

export default Person;

