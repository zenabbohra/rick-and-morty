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
    const pages = [1,2,3,4,5];
    const promiseArray = [];
    pages.map(page => {
      const responsePromise = fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => response.json())
        .then(chars => chars.results);
      promiseArray.push(responsePromise);
      return promiseArray
    });

    Promise.all(promiseArray)
      .then((resultArray) => resultArray.flat())
      .then((flattenedResultArray) => this.setState({rickAndMortyChars: flattenedResultArray} ));
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
            {filteredRickAndMortyChars.map((char,i) => {
              return <Card key={i} id={char.id} name={char.name} species={char.species}
                           gender={char.gender} status={char.status}/>
            })}
          </Scroll>
        </div>
  }
}

export default App;
