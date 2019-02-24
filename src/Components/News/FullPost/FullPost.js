import React, { Fragment } from 'react';

const fullPost = (props) => {
    return (
        <Fragment>
            <h3>{props.headLine}</h3>
            <small>{props.date}</small>
            <p>{props.body}</p>
        </Fragment>
    )
}

export default fullPost;