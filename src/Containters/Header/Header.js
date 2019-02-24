import React from 'react';

import style from './Header.module.css'
import Navbar from '../../Components/Navigation/Navbar/Navbar';

const header = (props) => {

    return (
        <div className={style.Header}>
            <Navbar logoClicked={props.logoClicked} addNewsClicked={props.addNewsClicked} />
        </div>
    )
}

export default header;