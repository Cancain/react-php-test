import React from 'react';

import style from './NavItem.module.css';

const navItem = (props) => {
    return (
        <p onClick={props.clicked}
            className={style.NavItem}
        >
            {props.text}
        </p>
    )
}

export default navItem;