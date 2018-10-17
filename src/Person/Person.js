import React from 'react';
import Radium from 'radium';
const person = (props) => {
    const style = {
        '@media(min-width:500px)':{
            width: '450px'
        }
    }
    return (
    <div className='person' style= {style}>
    <p onClick={props.click}>I'm a {props.name}. I am {props.age} year old. My hobbies are {props.hobby}</p>
    <p>{props.children}</p>
    <input type='text' onChange={props.changed} value={props.name}/>
    </div>)
}


export default Radium(person);