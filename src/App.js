import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons : [
      {name:'Lily', age: 1, hobby:'Reading'},
      {name:'Rose', age: 2,hobby:'Cycling'},
      {name:'Mari', age: 3,hobby:'Cooking'},

    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  nameChangeHandler = (event,id) => {
     const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
     })

     const person = {
       ...this.state.persons[personIndex]
     };

     person.name = event.target.value;

     const persons = [...this.state.persons];
     persons[personIndex] = person;

     this.setState({persons: persons});
  }


  render() {

    const style = {
      border: '1px solid blue',
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color : 'black'
      }
    }

    let persons = null

    const classes = [];

    if(this.state.persons.length <=2)
    {
      classes.push('red');
    }    

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    
    if(!this.state.showPersons)
    {
       persons = (
         <div>
           { this.state.persons.map((person,index) => {
             return <Person
             click = {() => this.deletePersonHandler(index)}
             name={person.name}
             age = {person.age}
             key = {person.id}
             changed={(event) => this.nameChangeHandler(event,person.id)}></Person>
           })}
         </div>
       );

       style.backgroundColor = 'red';
       style[':hover'] = {
        backgroundColor: 'salmon',
        color : 'black'
      }
    }
    
    return (
      <StyleRoot>
      <div className="App">
       <h1>Hi, I'm React</h1>
       <p className= {classes.join('')}>This is working</p>
       <button
        style= {style}
        onClick= {this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
