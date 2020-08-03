import React from 'react';
import Movie from '../movie/index';

const MovieList = (props) => {
    return (
        <React.Fragment>
            <div className="MovieList">
                {
                    props.movies.map((movie, i) => {
                        return (
                            <Movie key={movie.id} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} title={movie.title} vote={movie.vote_average} date={movie.release_date} overview={movie.overview} genres={movie.genre_ids} />
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default MovieList;