/*
Stateful vs. Stateless Components - stateful components a component that manages state. Stateless component has no internal state management. It is good practice to make as many
stateless (or dumb components) 
App.js is considered a stateful component (or container components because they contain the state of your components). We only want to have a couple of these components because
it depends on the size of your app. You restrict yourself to few stateful (container components) and many stateless (presentational components) because this makes your app easier
to maintain and manage. You have a clear flow of data and it is very clear where your main logic sits and where your data changes

Person.js is considered a stateless component because they have no internal logic. They are presentational components because typically
they only get and present data.
*/

// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
// const App = props => {
    // const [ personsState, setPersonsState ] = useState({
    //   persons: [
    //     { name: 'Austin', age: '25'},
    //     { name: 'Alexis', age: '23'},
    //     { name: 'Nick', age: '31'}
    //   ],
      // Other state is not affected by switch handler because it specifies 
      // persons and does not do a blanket change on all of state
      /* What are the only two things that change the cause React to update DOM?
      *  1. Changing states 
      *  2. Props
      */
    // });

    state = {
      persons: [
        { name: 'Austin', age: 25 },
        { name: 'Alexis', age: 24 },
        { name: 'Nick', age: 31 }
      ],
      otherState: 'some other value',
      showPersons: false
    }

    // const [otherState, setOtherState] = useState('some other Value');

    // console.log(personsState, otherState);

    // const switchNameHandler = () => {
    //   console.log('Was clicked!');
    //   Don't do this muy no bueno this.state.persons[0].name = 'Augustus'
    //   setPersonsState({
    //     persons: [
    //       { name: 'Augustus', age: '25'},
    //       { name: 'Alexis', age: '23'},
    //       { name: 'Nick', age: '105'}
    //     ],
    //     otherState: personsState.otherState
    //   } )
    // }

    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //     <p>This is really working!</p>
    //     {/* When calling function in an even don't use () at the end unless you want
    //     it to run on page load */}
    //     <button onClick={this.switchNameHandler}>Switch Name</button>
    //     {/* Person can be copied multipe times and can be used anywhere you import it into the project*/}
    //     <Person 
    //       name={personsState.persons[0].name} 
    //       age={personsState.persons[0].age}/>
    //     <Person 
    //       name={personsState.persons[1].name} 
    //       age={personsState.persons[1].age}
    //       click={this.switchNameHandler}> My Hobbies: Drawing, Snuggling, Netflixing</Person>
    //     <Person 
    //       name={personsState.persons[2].name} 
    //       age={personsState.persons[2].age}/>
    //   </div>
    // )
    // not html but jsx and then is coverted to html by the browser
    // can only have one root element (div, etc.) but can have adjacent elements
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

    // We can also pass values to our function by using new name for instance
    // switchNameHandler = (newName) => {
    //   console.log('Was clicked!');
    //   DON'T DO THIS: this.state.persons[0].name = 'Austin';
    //   this.setState( {
    //     persons: [
    //       { name: newName, age: 26 },
    //       { name: 'Alex', age: 24 },
    //       { name: 'Nicholas', age: 31 }
    //     ]
    //   } )
    // }
  
    nameChangedHandler = (event) => {
      this.setState( {
        persons: [
          { name: 'Augustus', age: 26 },
          { name: event.target.value, age: 24 },
          { name: 'Nicholas', age: 31 }
        ]
      } )
    }

    deletePersonHandler = (personIndex) => {
      // We call the slice method in order to make a copy of the array because currently we are pointing to the original array and mutating it which could lead to
      // to issues down the road in keeping track of data

      // const persons = this.state.persons.slice();
      // An alternative to this approach would be to use the ES6 spread method
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }

    render () {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };
      
      let persons = null;

      // Because a change in state causes React to re-render we are able to simple make a new variable set it to persons and then create a javascript conditional
      // that chacks if this.state.persons === true. If it does it re-renders show thing the list of persons if not then it does nothing. We are outsourcing the check from the
      // JSX to a variable we conditionally assign before rturning. By doing this we keep our "core component" clean as a template and make sure we only have to have one single
      // reference to either render nothing ot all the persons
      if(this.state.showPersons) {
        persons = (
          <div>
            {/* .map() maps every element in a given array into something else. It does this by executing a method on every element in a given array. The argument passed is a function
            in our case it is called persons and try to return an array of JSX objects or in our case the Person object. The second argument index is the key for the pair. If we do not
            have a key then we will have no idea what we are deleting 
            This is also the common pattern for outputting lists in React */}
            {this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)} // Click property being set to Person component to signal delete and call deletePersonHandler method
                name={person.name} 
                age={person.age} />
            })}
            {/* <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              //You can pass methods as props so that you can call a method which might change the state in another component that may not have or should not have access to a certain state
              click={this.switchNameHandler.bind(this, 'Augustus!!!')}
              //We call this, 'String' because this ^ controls what the this inside the function will refer to and binds it here
              changed={this.nameChangedHandler}> My Hobbies: Drawing, Snuggling, Netflixing</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} /> */}
          </div>
        );
      }

      return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          {/* Creating an anonomyous function to pass a parameter is not as efficent as just using bind */}
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {/* Below we are injecting javascript code into JSX by using the curly crackets and then comparing the state property
          this.state.showPersons which is initally set to false. We check to see if it is true using the question mark if it is we render the div
          if it is not then we render null */}
          {/* { 
            this.state.showPersons === true ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                //You can pass methods as props so that you can call a method which might change the state in another component that may not have or should not have access to a certain state
                click={this.switchNameHandler.bind(this, 'Augustus!!!')}
                //We call this, 'String' because this ^ controls what the this inside the function will refer to and binds it here
                changed={this.nameChangedHandler}> My Hobbies: Drawing, Snuggling, Netflixing</Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div> : null
          } */}
          {persons}
        </div>
      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;