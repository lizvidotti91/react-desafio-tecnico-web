import React from 'react';
import './styles.css';

function Pagination(props){
    const pageLinks = [];

    for(let i = 1; i <= props.pages + 1; i++){
        let active = props.currentPage == i ? 'active' : '';

        pageLinks.push(
            <li className={`Pagination ${active}`} key={i} onClick={()=>props.nextPage(i)}>
                <a href="#!"> {i} </a>
            </li>
        )
    }

    return(
        <div className="Pagination">
            <ul className="Pagination-list">
                {props.currentPage > 1 ? <li className="Pagination" onClick={()=>props.nextPage(props.currentPage-1)}> <a href="#!"> Anterior </a> </li> : ""}
                {pageLinks}
                {props.currentPage < props.pages + 1 ? <li className="Pagination" onClick={()=>props.nextPage(props.currentPage+1)}> <a href="#!"> Próximo </a> </li> : ""}
            </ul>
        </div>
    );
}

export default Pagination;