import React from 'react';
import SearchIcon from './search.svg'

const Search = ({ q, setQ }) => {
    const inputStyles = {
        margin: `2vh auto`,
        border: `none`,
        borderBottom: `2px solid black`,
        background: `transparent`,
        backgroundImage: `url(${SearchIcon})`,
        backgroundPosition: `10px center`,
        backgroundRepeat: `no-repeat`,
        padding: `7px`,
        textIndent: `25px`,
        width: `100%`
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
                    autoComplete="off"
                />
            </label>
        </div>
    );
}

export default Search;
