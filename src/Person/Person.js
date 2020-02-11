import React from 'react';
import './Person.css';

//ES6 declaring function
// function person() {
//     return(
//         <h2></h2>
//     );
// }

//ES5 declaring function
// var person = function() {

// }

// ES5 declaring const function
// const person = function() {

// }

//ES6 declaring const function - better for | this | keyword
/* 
*   When using class based components instead of function bases component
*   like belowe you would use this.props for Example
*   class Person extends Component {
*     render() {
*       return <p>My name is {this.props}</p>
*     }    
*   }
*/
const person = (props) => {
    // In order to use javascript code in JSX use sing curly braces
    // This allows the output of dynamic content with our JSX content
    return (
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        {/* We use props.children when we are trying to pass children elements
        (elements inside elements) directly into the element output */}
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    );
}

export default person;