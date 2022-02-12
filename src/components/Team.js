import React, { useState, useEffect } from 'react';
import CardWrapper from './CardWrapper'
import Search from './Search';
import './Team.css'

const Team = () => {
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
                if (Object.keys(result).length === 0) {
                    return <div>No data found</div>
                }
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
        return <div style={{ textAlign: `center` }}>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div style={{ textAlign: `center` }}>Loading...</div>;
    } else {


        return (
            <div className="team-wrapper">
                <header>
                    <h1>Meet the Team</h1>
                </header>
                <Search q={q} setQ={setQ} />
                <CardWrapper data={data} setData={setData} search={search} />

            </div>
        );
    }
}

export default Team;
