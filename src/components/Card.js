import React from 'react';
import bg1 from './card-bg-1.png'
import bg2 from './card-bg-2.png'
import bg3 from './card-bg-3.png'
import bg4 from './card-bg-4.png'
import bg5 from './card-bg-5.png'
import bg6 from './card-bg-6.png'
import Email from './email.svg'
import Phone from './phone.svg'
import './Card.css'

const Card = ({ person, toggle }) => {
    const bgArray = [bg1, bg2, bg3];
    const randomIndex = Math.floor(Math.random() * bgArray.length);
    const selectedPicture = bgArray[randomIndex];

    const bgArrayList = [bg4, bg5, bg6];
    const randomIndexList = Math.floor(Math.random() * bgArrayList.length);
    const selectedPictureList = bgArrayList[randomIndexList];

    const cardStyle = {
        backgroundImage: `url(${selectedPicture})`,
    }

    const cardListStyle = {
        backgroundImage: `url(${selectedPictureList})`,
    }
    return (
        <div style={toggle ? cardStyle : cardListStyle} data-testid={`card-${person.id.value}`} className={`card ${toggle ? "grid-card" : "list-card"}`}>
            <h2>{person.name.first} {person.name.last}</h2>
            <img src={person.picture.medium} alt="person thumbnail" />
            <h3>{person.location.city}</h3>
            <div className="links">
                <a href={`mailto:${person.email}`}>
                    <img src={Email} alt="mail icon" />
                </a>
                <a href={`tel:${person.cell}`}>
                    <img src={Phone} alt="phone icon" />
                </a>
            </div>
        </div>
    );
}

export default Card;
