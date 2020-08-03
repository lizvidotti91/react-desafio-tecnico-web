import React from 'react';
import './styles.css';

function Movie(props) {
    return (

        <div className="Container" key={props.id}>
            <div className="Container-image">
                {
                    props.image == null ? <img src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg" alt="Poster do Filme" /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Poster do Filme" />
                }
            </div>
            <div className="Container-content">
                <div className="Container-title"> 
                    <h1>{props.title}</h1>
                    <a href="#" className="More-view" onClick={() => props.viewMovieInfo(props.movieId)}>Mais</a> 
                </div>
                <div className="Container-vote"> <p>{props.vote}</p> </div>
                <div className="Container-date"> <p> {props.date.split('-').reverse().join('/')} </p> </div>
                <div className="Container-overview"> <p>{props.overview}</p> </div>
            </div>
        </div>

    );
}

export default Movie;