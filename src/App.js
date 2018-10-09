import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        {name:'Max', age:28},
        {name:'Lax', age:22},
        {name:'Pax', age:23}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
          {name: newName, age:58},
          {name:'Snax', age:52},
          {name:'Fax', age:24}
      ]
    })
  }


  nameChangedHandler = (event) => {
    this.setState({
        persons: [
            {name: 'Max', age:50},
            {name: event.target.value, age: 34},
            {name:'Fax', age:24}
        ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hallo peeps. It's ya boi Ali-A</h1>
          <button className="customButton" onClick={() => this.switchNameHandler("Robby")}>Switch Name</button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}></Person>
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Not Paul')}
              changed={this.nameChangedHandler}>My hobbies: Racing</Person>
          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}></Person>
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement("h1",null, "Hallo peeps, it's ya boi Linus!"));
  }
}

export default App;
