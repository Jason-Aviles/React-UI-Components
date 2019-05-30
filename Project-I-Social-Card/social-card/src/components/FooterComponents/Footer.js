
import React from 'react';
import './Footer.css'



let Footer = ()=>{
function color() {
    let footer = document.querySelectorAll('.footer-inside')  ;
    footer.forEach(
        (x)=>{
            x.classList.add('icon')
        } 
    )
}

return (
    <div className='footer-container'>
    <div className='footer-inside' onMouseOver={color}>
<i className="far fa-comment" data-tab='1'></i>
<i className="fas fa-sync" data-tab='2'></i>
<i className="far fa-heart" data-tab='3'></i>
<i className="far fa-envelope" data-tab='3'></i>
   </div> </div>
)

}

export default Footer;