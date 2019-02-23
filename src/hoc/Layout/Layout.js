import React, { Fragment } from 'react';

import News from '../../Components/News/News';

const layout = (props) => {
    return (
        <Fragment>
            <h1>The fake news journal</h1>
            <News />
        </Fragment>
    )
}

export default layout;