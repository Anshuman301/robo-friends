import React from 'react';
import './card.style.css'
const Card = (props) =>{
    return(
    <div className='card-container'>
        <img src = {`https://www.robohash.org/${props.robot.id}?set=set3`} alt='' height='200' width = '200'/>
        <h2>{props.robot.name}</h2>
        <p>{props.robot.email}</p>
    </div>
    )
}

export default Card;