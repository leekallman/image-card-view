import React, { useState, useEffect } from 'react';
import CardWrapper from './CardWrapper'
import Search from './Search'

const Users = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    // set search query to empty string
    const [q, setQ] = useState("");

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(result => {
            setIsLoaded(true);
            setData(result.results);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
          });
    }, [])
    // filter the items use array property .some() to return an item even if other requirements didn't match
    function search(data) {
        return data.filter((person) => {
            
                return (
                    person
                        .name.last
                        .toLowerCase()
                        .includes(q.toLowerCase()) ||
                        
                    person
                        .name.first
                        .toLowerCase()
                        .includes(q.toLowerCase())
                );
            });
    }
    if (error) {
        return <div style={{textAlign:`center`}}>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div style={{textAlign:`center`}}>Loading...</div>;
      } else {


    return (
        <div style={{padding: `5vw`}}>
            <header>
                <h1 style={{fontSize:`7vw`}}>Meet the Team</h1>
            </header>
            <Search q={q} setQ={setQ} />
            <CardWrapper data={data} setData={setData} search={search}/>
            
        </div>
    );
}
}

export default Users;
