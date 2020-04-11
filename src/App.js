import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      searchField : '',
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }))
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    });
  }

  render() {
    const { searchField, monsters } = this.state;
    const monstersFiltered = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} placeHolder={'search Monster'} />
        <CardList monsters={monstersFiltered} />
      </div>
    );
  }
}

export default App;