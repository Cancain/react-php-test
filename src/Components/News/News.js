import React, { Fragment, Component } from 'react';
import axios from 'axios';

class News extends Component {

    componentDidMount() {
        axios.get('/posts/news/')
            .then(response => {
                console.log(response);
            })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h2>Headline</h2>
                    <small>Date published</small>
                    <p>body</p>
                </div>
                <div>
                    <h2>Headline</h2>
                    <small>Date published</small>
                    <p>body</p>
                </div>
            </Fragment>
        )
    }
}

export default News;