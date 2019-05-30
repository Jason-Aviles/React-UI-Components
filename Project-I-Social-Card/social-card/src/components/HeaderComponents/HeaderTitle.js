import React from 'react';
import './Header.css';
import moment from '../../../node_modules/moment'
let HeaderTitle = ()=>{

    return(
        <div className='header-title'>
           <h1>Lambda School <span>@LambdaSchool {moment().format("MMM Do YY")}</span></h1>
        </div>
    )

}

    export default HeaderTitle


