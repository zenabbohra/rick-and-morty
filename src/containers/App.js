import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';
import Scroll from "../components/Scroll";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rickAndMortyChars: [],
      searchInput: ''
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(chars => {
        const charsArray = chars.results;
        console.log('status', charsArray[0].status);
        this.setState({rickAndMortyChars: charsArray})
      });
  }

  onInputChange = (event) => {
    this.setState({searchInput: event.target.value});
  };

  render() {
    const { rickAndMortyChars, searchInput } = this.state;
    const filteredRickAndMortyChars = rickAndMortyChars.filter(char => char.name.toLowerCase().includes(searchInput.toLowerCase()));
    return !rickAndMortyChars.length
      ? <h1 className='loading'>Loading</h1>
      : <div className='tc'>
          <p className='f1'>Rick And Morty</p>
          <SearchBox onInputChange={this.onInputChange}/>
          <Scroll>
            {filteredRickAndMortyChars.map(char => {
              return <Card id={char.id} name={char.name} species={char.species}
                           gender={char.gender} status={char.status}/>
            })}
          </Scroll>
        </div>
  }
}

export default App;
