import React, { Fragment, Component } from 'react';
import axios from 'axios';

import Post from '../News/Post/Post';

class News extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('/posts/news/')
            .then(response => {
                const newPosts = response.data;
                this.setState({ posts: newPosts });
            })
    }

    render() {

        const news = this.state.posts.map(post => {
            return (
                <Post
                    key={post.id}
                    headLine={post.headLine}
                    date={post.createdAt}
                    body={post.body}
                />
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