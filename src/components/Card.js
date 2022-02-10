import React from 'react';
import bg1 from './card-bg-1.png'
import bg2 from './card-bg-2.png'
import bg3 from './card-bg-3.png'
import Email from './email.svg'
import Phone from './phone.svg'

const Card = ({ person }) => {
    const bgArray = [bg1, bg2, bg3];
    const randomIndex = Math.floor(Math.random() * bgArray.length);
    const selectedPicture = bgArray[randomIndex];

    const cardStyle={
        backgroundImage: `url(${selectedPicture})`,
        backgroundPosition:`center`,
        backgroundSize:`cover`, 
        height: `30vh`,
        borderRadius: `13px`,
        textAlign: `center`,
        padding:`7vw 3vw`,
        display:`flex`,
        flexDirection:`column`,
        justifyContent:`space-between`,
        boxShadow: `0px 1.3px 2.57px rgb(0, 0, 0, 0.1)`,
    }

    const imgStyles={
        boxShadow: `0px 2.57px 2.57px rgb(0, 0, 0, 0.2)`,
        height:`25vw`, 
        width:`25vw`, 
        borderRadius:`50%`, 
        margin:`auto`
    }
    return (
        <div style={cardStyle} data-testid={`card-${person.id.value}`} >
            <h3 style={{fontSize:`4vw`, letterSpacing:`1px`}}>{person.name.first} {person.name.last}</h3>
            <img src={person.picture.medium} alt="person thumbnail" style={imgStyles}/>
            <h4 style={{fontSize:`4vw`, fontWeight:`300`}}>{person.location.city}</h4>
            <div>
                <a href={`mailto:${person.email}`} style={{marginRight:`2vw`}}>
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
