import React, { Fragment, Component } from 'react';
import axios from 'axios';

import Post from '../News/Post/Post';

class News extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('/Posts/news/-1')
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
                    id={post.id}
                    headLine={post.headLine}
                    date={post.createdAt}
                    body={post.body}
                    clicked={() => this.props.newsClicked(post.id)}
                />
            )
        })

        return (
            <div style={{ marginTop: '4rem' }}>
                {news}
            </div>
        )
    }
}

export default News;