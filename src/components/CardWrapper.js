import React from 'react';
import Card from './Card'

const Cardwrapper = ({ data }) => {
    const wrapperStyle = {
        display: `grid`,
        gridTemplateColumns: `repeat(2, 1fr)`,
        gridGap: `7vw`
    }

    return (
        <div style={wrapperStyle}>
            {data.map((user, index) =>
                <Card key={index} user={user} />
            )}
        </div>
    );
}

export default Cardwrapper;
