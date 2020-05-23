import React from 'react';
// import logo from './logo.svg';
import CardList from './components/card-list/card-list.component'
import {SearchBox} from './components/Search-Box/SearchBox.component';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => this.setState({robots:users}))
  }
  handleChange = (e) =>{
    this.setState({searchField:e.target.value})
  }
  render(){
    const {robots,searchField} = this.state;
    const filterRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return(
      <div className="App">
        <h1>RoboFriends</h1>
        <SearchBox 
        placeholder= 'Search Robots ...' 
        handleChange = {this.handleChange }/>
        <CardList robots = {filterRobots}/>
    </div>
    )
  }
}

export default App;
