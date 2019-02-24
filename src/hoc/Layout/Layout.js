import React, { Fragment, Component } from 'react';
import axios from 'axios';

import News from '../../Components/News/News';
import Header from '../../Containters/Header/Header';
import Modal from '../../Containters/Modal/Modal';
import FullPost from '../../Components/News/FullPost/FullPost';

class Layout extends Component {

    state = {
        showModal: null,
        newsId: null,
        currentPost: []
    }

    componentDidUpdate() {
        axios.get('/posts/showpost/' + this.state.newsId)
            .then(response => {
                const post = response.data;
                if (this.state.currentPost.id !== post.id) {
                    this.setState({ currentPost: post })
                }
            })
            .catch(error => {
                console.log(error);
            })
        console.log(this.state.currentPost.id);

    }

    homeHandler = () => {
        this.setState({ showModal: null })
    }

    addNewsClickedHandler = () => {
        this.setState({ showModal: 'addNews' })
    }

    newsClickedHandler = (id) => {
        this.setState({
            showModal: 'showNews',
            newsId: id
        })
    }

    render() {

        const addNews = <Modal
            closeClicked={this.homeHandler}
            backdropClicked={this.homeHandler} />;

        let showNews = null;

        const showNewsHandler = (id) => {
            showNews = <Modal
                closeClicked={this.homeHandler}
                backdropClicked={this.homeHandler}>
                <FullPost
                    headLine={this.state.currentPost.headLine}
                    date={this.state.currentPost.createdAt}
                    body={this.state.currentPost.body}
                />
            </Modal>
        }

        let modalHandler;
        switch (this.state.showModal) {
            case 'addNews':
                modalHandler = addNews;
                break;
            case 'showNews':
                showNewsHandler(this.state.newsId);
                modalHandler = showNews;
                break;
            default:
                modalHandler = null;
        }

        return (
            <Fragment>
                <Header
                    addNewsClicked={this.addNewsClickedHandler}
                    logoClicked={this.homeHandler}
                />
                {modalHandler}
                <News
                    newsClicked={(event) => this.newsClickedHandler(event)}
                />
            </Fragment>
        )
    }
}

export default Layout;