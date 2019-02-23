import React, { Fragment } from 'react';

import News from '../../Components/News/News';
import Header from '../../Containters/Header/Header';

const layout = (props) => {
    return (
        <Fragment>
            <Header />
            <News />
        </Fragment>
    )
}

export default layout;