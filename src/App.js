import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.components';

class App extends Component{
  constructor(){
    super();
  
    this.state = {
      person: [],
      searchfield: ''
    };

    //this.handleChange = this.handleChange.bind(this);


  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({person:users}));
  }

handleChange = (e) => {
  this.setState({ searchfield: e.target.value })
}

  render(){

    const { person, searchfield } = this.state;
    const filteredPerson = person.filter(personn =>
      personn.name.toLowerCase().includes(searchfield.toLowerCase())
      );


    return (
      <div className="App">
      <h1>CONTACTS</h1>
        <SearchBox
          placeholder='Search a Person'
          handleChange={ this.handleChange }

        />
        <CardList person={filteredPerson} />
     </div>
    );

  }
}

export default App;
