import React from 'react';
import './movie-info.css';

const MovieInfo = (props) => {
    return (
        <React.Fragment>
            <div className="Back">
                <a href="#" onClick={props.closeMovieInfo}>Voltar</a>
            </div>
            <div className="Movie-Info-Container-title">
                <h1>Lorem Ipsum</h1>
                <p>DD/MM/YYYY</p>
            </div>
            <div className="MovieInfo-Container">
                <div className="Movie-Info-Container-content">
                    <div className="Movie-Info-Container-overview">
                        <h1>Sinopse</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et ligula diam. Cras a massa quis sem placerat sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida orci metus, in ullamcorper leo pellentesque ac.</p>
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
                                <p>Lorem</p>
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
                                100%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Movie-Info-Container-image">
                    <img src="https://images.pexels.com/photos/1121967/pexels-photo-1121967.jpeg" />
                </div>
            </div>
            <div className="Video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4OmEi_AIjZc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </React.Fragment>
    );
}

export default MovieInfo;