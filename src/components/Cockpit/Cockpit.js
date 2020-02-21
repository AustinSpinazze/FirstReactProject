import React, { useEffect } from 'react';
import classes from './cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request...
        // Since useEffect runs everytime there is a re-render how can we make it only run on first render or something else
        setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000);
        return () => {
            // This runs before the main useEffect but after the first render cycle
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, [props.persons]);
    // You can leave as empty array if you only want it to run the very first time

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            // This runs before the main useEffect but after the first render cycle
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    })

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }

    if(props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    } 

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;