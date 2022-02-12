import React from 'react';
import SearchIcon from './search.svg'
import './Search.css'

const Search = ({ q, setQ }) => {
    const inputStyles = {
        backgroundImage: `url(${SearchIcon})`,
    }
    return (
        <div>
            <label htmlFor="search-form">
                <input
                    style={inputStyles}
                    type="search"
                    name="search-form"
                    id="search-form"
                    rel="search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    autoComplete="name"
                />
            </label>
        </div>
    );
}

export default Search;
