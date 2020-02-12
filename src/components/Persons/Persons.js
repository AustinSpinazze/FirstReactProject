import React from 'react';
import Person from './Person/Person'

const persons = (props) =>
    props.persons.map((person, index) => {
        return <Person
          click={() => props.clicked( index )} // Click property being set to Person component to signal delete and call deletePersonHandler method
          name={person.name} 
          age={person.age} 
          // We assign a key to tell React which elements in the DOM need to change and which do not
          key={person.id}
          changed = {(event) => props.changed(event, person.id)}
          />
    }   );

export default persons;