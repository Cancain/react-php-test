import React, { Fragment } from 'react';

import News from '../../Components/News/News';
import Header from '../../Containters/Header/Header';

const layout = (props) => {
    return (
        <Fragment>
            <Header />
            <h1>The fake news journal</h1>
            <News />
        </Fragment>
    )
}

export default layout;