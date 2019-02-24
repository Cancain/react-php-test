import React from 'react';

import style from './NavItem.module.css';

const navItem = (props) => {
    return (
        <div onClick={props.clicked}>
            <p
                className={style.NavItem}
            >
                {props.text}
            </p>
        </div>
    )
}

export default navItem;