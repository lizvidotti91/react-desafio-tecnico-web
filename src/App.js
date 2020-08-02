import React, { Component } from 'react';
import './styles.css';
import Title from './components/title/index';
import Search from './components/search/index';
import MovieList from './components/movie-list/index';

class App extends Component{
  constructor(){
    super()
    this.state = {
      movies: [],
      searchTerm: ''
    }
    this.apiKey = 'b5d0e5fd9722187c8fd22a8cd3b93de7'
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=pt-BR`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results]})
    })
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }
  render(){
    return(
      <div className="App">
        <Title/>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
