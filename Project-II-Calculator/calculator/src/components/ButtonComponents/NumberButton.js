import React from 'react';
import './Button.css';
import Sigh from './Sighs'
 const num = [{'id':7},{'id':8},{'id':9},{'id':4},{'id':5},{'id':6},{'id':1},{'id':2},{'id':3}]


let NumberButton = ()=>{
 


return (
<div className='box'>

<div className='inside'>
    <div className='numberBox'>
   
    {num.map((number)=>{
        return(<div key={number.id}>{number.id}</div>)
    })}
      
        
    </div>
       <Sigh/>
   
    </div></div>
)

}

export default NumberButton
