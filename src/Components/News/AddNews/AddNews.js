import React, { Component } from 'react';
import axios from 'axios';

import style from './AddNews.module.css';

class AddNews extends Component {

    state = {
        title: null,
        body: null
    }

    submitHandler = () => {
        let data = {
            title: this.state.title,
            body: this.state.body
        }

        const json = JSON.stringify(data)
        axios.post('/posts/addPost/-1', json)
            .then(response => {
                console.log(response)
            })

    }

    render() {
        return (
            <div className={style.AddNews}>
                <h3>Add news</h3>
                <div>
                    <label>Title</label>
                    <input
                        onChange={(event) => this.setState({ title: event.target.value })}
                        name='title'
                        type='text'
                        placeholder='Enter the title here'
                    />
                </div>
                <div>
                    <label>Body</label>
                    <textarea onChange={(event) => this.setState({ body: event.target.value })}
                        name='body'
                        placeholder='Write the body of the post here...'>
                    </textarea>
                </div>
                <button
                    onClick={this.submitHandler}
                    className={style.btn}
                >
                    Submit
                </button>
                <button onClick={this.props.cancelButtonClick}
                    style={{ marginLeft: '0.5rem' }}
                    className={style.btn}
                >
                    Cancel
                </button>
            </div>
        )
    }
}

export default AddNews;