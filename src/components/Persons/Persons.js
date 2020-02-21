import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    // Will get error with this because we do not have a constructor or inital state
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDervivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillRecievePrps', props);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] should componentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    // Can run any code here that needs to be done before the code is removed
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return ( <Person
              click={() => this.props.clicked( index )} // Click property being set to Person component to signal delete and call deletePersonHandler method
              name={person.name} 
              age={person.age} 
              // We assign a key to tell React which elements in the DOM need to change and which do not
              key={person.id}
              changed = {(event) => this.props.changed(event, person.id)}
              />
            );
        });
    }    
}

export default Persons;