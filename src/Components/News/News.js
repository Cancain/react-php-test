import React, { Fragment, Component } from 'react';
import axios from 'axios';

class News extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('/posts/news/')
            .then(response => {
                const newPosts = response.data;
                this.setState({ posts: newPosts });
                console.log(newPosts);
            })
    }

    render() {

        const news = this.state.posts.map(post => {
            return (
                <div>
                    <h1>{post.headLine}</h1>
                    <p>{post.body}</p>
                </div>
            )
        })

        return (
            <Fragment>
                {news}
            </Fragment>
        )
    }
}

export default News;