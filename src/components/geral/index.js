import React from 'react';

class ListMovies extends React.Component{
    constructor(){
        super()
        this.state={
            movies: []
        };
        this.apiKey = 'b5d0e5fd9722187c8fd22a8cd3b93de7'
    }
    
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=pt-BR&`)
        .then(res => res.json())
        .then(res => {
            this.setState({movies: [...res.results]})
            console.log(this.state.lista);
        });
    }

    render(){
        return(
            <div className="Container-content">
                {this.state.movies.map(item => (
                        <div key={item.id}>
                            <div className="Container-title"> <h1>{item.title}</h1> </div>
                            <div className="Container-vote"> <p>{item.vote_average}</p> </div>
                            <div className="Container-date"> <p> {item.release_date.split('-').reverse().join('/')} </p> </div>
                            <div className="Container-overview"> <p>{item.overview}</p> </div>
                        </div>
                ))}
            </div>
        );
    }
}

export default ListMovies;