import React from 'react';
import './movie-info.css';

const MovieInfo = (props) => {
    let idCurrent = props.currentMovie[0].id;
    console.log(idCurrent);
    
    return (
        <React.Fragment>
            <div className="Back">
                <a href="#" onClick={props.closeMovieInfo}>Voltar</a>
            </div>
            <div className="Movie-Info-Container-title">
                <h1>{props.currentMovie[0].title}</h1>
                {console.log(props.currentMovie)}
                <p>{props.currentMovie[0].release_date.split('-').reverse().join('/')}</p>
            </div>
            <div className="MovieInfo-Container">
                <div className="Movie-Info-Container-content">
                    <div className="Movie-Info-Container-overview">
                        <h1>Sinopse</h1>
                        <p>{props.currentMovie[0].overview}</p>
                    </div>
                    <div className="Movie-Info-Container-information">
                        <h1>Informações</h1>
                        <div className="Movie-Info-Box">
                            <div className="Movie-Info-Status">
                                <h2>Situação</h2>
                                <p>Lorem</p>
                            </div>
                            <div className="Movie-Info-Status">
                                <h2>Idioma</h2>
                                <p>{props.currentMovie[0].original_language}</p>
                            </div>
                            <div className="Movie-Info-Status">
                                <h2>Duração</h2>
                                <p>Lorem</p>
                            </div>
                            <div className="Movie-Info-Status">
                                <h2>Orçamento</h2>
                                <p>Lorem</p>
                            </div>
                            <div className="Movie-Info-Status">
                                <h2>Receita</h2>
                                <p>Lorem</p>
                            </div>
                            <div className="Movie-Info-Status">
                                <h2>Lucro</h2>
                                <p>Lorem</p>
                            </div>
                        </div>
                        <div className="Movie-Info-Classification">
                            <div className="Genres">
                                <a href="#">Gender</a>
                                <a href="#">Gender</a>
                                <a href="#">Gender</a>
                            </div>
                            <div className="Vote">
                                {props.currentMovie[0].vote_average}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Movie-Info-Container-image">
                    {
                        props.currentMovie[0].poster_path == null ? <img src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg" alt="Poster do Filme" /> : <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie[0].poster_path}`} alt="Poster do Filme" />
                    }
                </div>
            </div>
            <div className="Video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4OmEi_AIjZc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </React.Fragment>
    );
}

export default MovieInfo;