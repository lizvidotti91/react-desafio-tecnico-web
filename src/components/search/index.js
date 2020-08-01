import React from 'react';
import './styles.css';

function Search(props){
    return(
        <React.Fragment>
            <form className="FormBox" onSubmit={props.handleSubmit} action="">
                <input onChange={props.handleChange} className='SearchButton' type="text" placeholder="Busque um filme por nome, ano ou gênero"></input>
            </form>
        </React.Fragment>
    );
}

export default Search;