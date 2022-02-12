import React, {useState, lazy, Suspense} from 'react';
import SortingIcon from './sorting.svg';
import GridIcon from './grid.svg';
import ListIcon from './list.svg';
import './CardWrapper.css'

const Card = lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 1*1000)).then(() => 
     import('./Card')
    );
});

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
            <Suspense maxDuration={300} fallback={<div>Loading...</div>}>
            {search(data).map((person, index) =>
                <Card key={index} person={person} toggle={toggle} />
            )}
            </Suspense>
            </div>
        </div>
    );
}

export default Cardwrapper;
