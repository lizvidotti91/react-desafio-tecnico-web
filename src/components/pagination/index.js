import React from 'react';
import './styles.css';

class Pagination extends React.Component {
    constructor(){
        super()
        this.state={
            movies: [],
            currentPage: 1,
            todosPerPage: 5
        };
        this.apiKey = 'b5d0e5fd9722187c8fd22a8cd3b93de7'
    }
    
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=pt-BR&`)
        .then(res => res.json())
        .then(res => {
            this.setState({movies: [...res.results]})
            console.log(this.state.movies);
        });
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { movies, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.state.movies.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.movies.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <ul>
                    {renderTodos}
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}

export default Pagination;