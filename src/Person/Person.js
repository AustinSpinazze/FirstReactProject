import React from 'react';
import styled from 'styled-components';
//import './Person.css';

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
const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    // In order to use javascript code in JSX use sing curly braces
    // This allows the output of dynamic content with our JSX content
    return (
        <StyleDiv>
        {/* <div className="Person" style={style}> */}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {/* We use props.children when we are trying to pass children elements
            (elements inside elements) directly into the element output */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        {/* </div> */}
        </StyleDiv>
    );
}

export default person;