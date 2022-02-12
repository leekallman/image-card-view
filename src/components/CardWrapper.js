import React, { useState } from 'react';
import Card from './Card';
import SortingIcon from './sorting.svg';
import GridIcon from './grid.svg';
import ListIcon from './list.svg';
import './CardWrapper.css'

const Cardwrapper = ({ data, setData, search }) => {

    const [currentSort, setCurrentSort] = useState('down');
    const [toggle, setToggle] = useState(true);

    const toggler = () =>{
        setToggle(prev => !prev)
    }

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
        // //update state to sorted data array
        let sorted = [...data].sort(sortTypes[currentSort].fn);
        setData(sorted);
    }

    return (
        <div>
            <div className="button-bar">
                <button onClick={onSortChange}><img src={SortingIcon} alt="sorting icon"/></button>
                <button onClick={toggler}><img src={toggle ? ListIcon : GridIcon} alt="grid icon"/></button>
            </div>
            <div className={`card-wrapper ${toggle ? "grid" : "list"}`}>
            {search(data).map((person, index) =>
                <Card key={index} person={person} toggle={toggle} />
            )}
            </div>
        </div>
    );
}

export default Cardwrapper;
