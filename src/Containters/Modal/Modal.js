import React, { Fragment } from 'react';

import Backdrop from '../../hoc/Backdrop/Backdrop';
import style from './Modal.module.css';

const modal = (props) => {

    return (
        <Fragment>
            <Backdrop clicked={props.backdropClicked} />

            <div className={style.Modal} >
                <div>
                    <i onClick={props.closeClicked} className="fas fa-window-close"></i>
                    {props.children}
                </div>

            </div>
        </Fragment>
    )
}

export default modal;