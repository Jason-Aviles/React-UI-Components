import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';


// <HeaderContent/>
            // 
const HeaderContainer = ()=>{

        return(
            <div className="headerContainer">
            
             <ImageThumbnail />
             <div className='inside-container'>
               <HeaderTitle/>
              <HeaderContent/></div>
      </div>  )


}


export default HeaderContainer;