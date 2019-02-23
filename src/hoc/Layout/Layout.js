import React, { Fragment } from 'react';

import News from '../../Components/News/News';
import Header from '../../Containters/Header/Header';
import Modal from '../../Containters/Modal/Modal';

const layout = (props) => {
    return (
        <Fragment>
            <Header />
            <Modal />
            <News />
        </Fragment>
    )
}

export default layout;