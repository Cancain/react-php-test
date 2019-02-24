import React from 'react';

import style from './Post.module.css'

const post = (props) => {
    return (
        <div className={style.Post} onClick={props.clicked}>
            <h3>{props.headLine}</h3>
            <small>{props.date}</small>
        </div>
    )
}

export default post;