import React from 'react';
import Movie from '../movie/index';

function MovieList(props){
    return(
        <div className="MovieList">
            {
                props.movies.map((movie,i) => {
                    return(
                        <Movie key={movie.id} image={movie.poster_path} title={movie.title} vote={movie.vote_average} date={movie.release_date} overview={movie.overview}/>
                    );
                })
            }
        </div>
    );
}

export default MovieList;