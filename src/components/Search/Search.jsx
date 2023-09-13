import React from "react";
import './Search.css';
import { FaSearch } from "react-icons/fa";

function SearchBar () {
    return (
        <div className="input-wrapper">
        <FaSearch className='icon 'id="search-icon" />
        <input placeholder="Pesquisar Produtos..." />
        </div>
    )
     
}

export default SearchBar;