import React, { Fragment } from 'react';

import News from '../../Components/News/News';

const layout = (props) => {
    return (
        <React.Fragment>
            <h1>The fake news journal</h1>
            <News />
        </React.Fragment>
    )
}

export default layout;