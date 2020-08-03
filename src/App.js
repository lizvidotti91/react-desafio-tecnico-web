import React, { Component } from 'react';
import './styles.css'; // Importando o CSS geral, com o reset da página + variáveis das cores
import Title from './components/title/index'; // Importando o <nav> da página
import Search from './components/search/index'; // Importando o a caixa de pesquisa
import ListMovies from './components/geral/index'; // Importando a lista de filmes da página inicial
import MovieList from './components/movie-list/index'; // Importando a lista de filmes para o sistema de busca
import MovieInfo from './components/movie-info/index'; // Importando a função que mostra mais detalhes do filme clicado

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      currentMovie: null
    }
    this.apiKey = 'b5d0e5fd9722187c8fd22a8cd3b93de7'
  }

  // Método que pega o valor escrito na caixa de pesquisa da página
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  // Método que compara o valor digitado na caixa de pesquisa com a API
  handleSubmit = (e) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=pt-BR&`)
      .then(data => data.json())
      .then(data => {
        this.setState({ movies: [...data.results], totalResults: data.total_results })
        console.log(data.results);
      })
    e.preventDefault()
  }

  // Método que será usado quando clicar no botão Mais, que está ao lado do título de cada filme da lista
  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movies => movies.id == id);
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({ currentMovie: filteredMovie })
  }

  // Método que será usado para sair da página de detalhes do filme, e retornar à lista de pesquisa
  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  }

  render() {
    return (
      <div className="App">
        <Title />
        {this.state.currentMovie == null ?
          <div>
            <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} />
          </div>
          :
          <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} />
        }
      </div>
    );
  }
}

export default App;