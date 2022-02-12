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
            fn: (a, b) => {
                let x = a.name.first.toUpperCase(),
                y = b.name.first.toUpperCase();
                return x === y ? 0 : x > y ? 1 : -1;
            }
        },
        down: {
            fn: (a, b) => {
                let x = a.name.first.toUpperCase(),
                y = b.name.first.toUpperCase();
                return x === y ? 0 : x < y ? 1 : -1;
            }
        }
    }

    const onSortChange = () => {
        let nextSort;
        if (currentSort === 'down') nextSort = 'up';
        else nextSort = 'down';
        setCurrentSort(nextSort);
        let sorted = [...data].sort(sortTypes[currentSort].fn);
        setData(sorted);
    }

    return (
        <div>
            <div className="button-bar">
                <button onClick={onSortChange}><img src={SortingIcon} alt="sorting icon"/></button>
                <button onClick={toggler}><img data-testid={`toggle-btn`} src={toggle ? ListIcon : GridIcon} alt="grid icon"/></button>
            </div>
            <div className={`card-wrapper ${toggle ? "grid" : "list"}`} data-testid={`card-wrapper`}>
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
