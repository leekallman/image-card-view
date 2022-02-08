import React, { useState, useEffect } from 'react';
import CardWrapper from './CardWrapper'

const Users = () => {

    const [data, setData] = useState([]);
    const getUsers = () => { 
        fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(result => {
            console.log(result)
            setData(result.results);
        })
        .catch(error => {
            console.error('Error:', error);
          });
    }
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div style={{padding: `5vw`}}>
            <header>
                <h1 style={{fontSize:`7vw`}}>Meet the Team</h1>
            </header>
            
            <CardWrapper data={data}/>
            
        </div>
    );
}

export default Users;
