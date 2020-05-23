import React from 'react';
import Card from '../card/Card.component'
import './card-list.style.css'
const CardList = (props) => {

    return(
        <div className='card-list'>
            {
            props.robots.map(robot => <Card key ={robot.id} robot = {robot}/>)
            }
        </div>
    )
}

export default CardList;