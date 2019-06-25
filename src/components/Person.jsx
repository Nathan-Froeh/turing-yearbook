import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE

function Person({person, name}) {

  return(
    <article>
      <img src={person.photo} className="head-shot" alt={'Photo of ' + name}/>
      <h2>{person.name}</h2>
      <p>{person.quote}</p>
      <h3>{person.superlative}</h3>
    </article>

  )
}

export default Person;

