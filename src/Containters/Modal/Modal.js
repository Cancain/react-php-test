import React, { Fragment } from 'react';

import Backdrop from '../../hoc/Backdrop/Backdrop';
import style from './Modal.module.css';

const modal = (props) => {

    return (
        <Fragment>
            <Backdrop clicked={props.backdropClicked} />

            <div className={style.Modal} >
                <i onClick={props.closeClicked} class="fas fa-window-close"></i>
                {props.children}
            </div>
        </Fragment>
    )
}

export default modal;