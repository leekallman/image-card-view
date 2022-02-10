import React, { useState } from 'react';
import Card from './Card'
import SortingIcon from './sorting-icon.svg'

const Cardwrapper = ({ data, setData, search }) => {
    const wrapperStyle = {
        display: `grid`,
        gridTemplateColumns: `repeat(2, 1fr)`,
        gridGap: `7vw`
    }
    const [currentSort, setCurrentSort] = useState('down');

    const sortTypes = {
        up: {
            fn: (a, b) => a.name.first.toLowerCase()-b.name.first.toLowerCase()
        },
        down: {
            fn: (a, b) => b.name.first.toLowerCase()-a.name.first.toLowerCase()
        }
    }
    const onSortChange = () => {
        let nextSort;
        if (currentSort === 'down') nextSort = 'up';
        else nextSort = 'down';
        setCurrentSort(nextSort);
        console.log(data)
        // //update state to sorted data array
        let sorted = [...data].sort(sortTypes(currentSort).fn);
        setData(sorted);
    }

    return (
        <div>
            <button onClick={onSortChange}><img src={SortingIcon} alt="sorting icon"/></button>
            <div style={wrapperStyle}>
            {search(data).map((person, index) =>
                <Card key={index} person={person} />
            )}
            </div>
        </div>
    );
}

export default Cardwrapper;
