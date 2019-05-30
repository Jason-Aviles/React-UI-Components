import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent'

let CardContainer = () =>{

    return (
        <div className='CardContainer'>
      <CardBanner/>
      <CardContent/>
</div>
    )
}


export default CardContainer;
