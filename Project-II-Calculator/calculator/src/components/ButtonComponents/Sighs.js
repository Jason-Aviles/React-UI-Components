import React from 'react';
import './Button.css';

const sighs = [{'id':1,'sigh':'%'},{'id':2,'sigh':'X'},{'id':3,'sigh':'+'},{'id':4,'sigh':'+'},{'id':5,'sigh':'='},]

let NumberButton = ()=>{

return (

    <div className='sighBox'>
     {sighs.map(
         (x)=>{
             return(<div key={x.id}>{x.sigh}</div>)
         }
     )}
          
       

    </div>
)

}

export default NumberButton
