import React, { Component } from 'react';
import PeopleList from './components/PeopleList.js'
import './App.css';

class App extends Component {
  render() {
    this.peopleArray = ["Jonh", "Mary", "Beth"];
      
    return (
      <div>
        <PeopleList people={this.peopleArray} />
      </div>
    );
  }
}

export default App;

