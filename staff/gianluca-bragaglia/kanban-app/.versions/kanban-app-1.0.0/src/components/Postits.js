import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Post from './Post'
import Error from './Error'

class Postits extends Component {
    state = { postits: [], error: null }

    componentDidMount() {
        try {
            logic.listPostits()
            .then(postits => { this.setState({ postits }) })
            .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }
  

    handleSubmit = (text, status) => {

        try {
            logic.addPostit(text, status)
                .then(() => logic.listPostits())
                .then(postits => this.setState({ postits, error: null }))
                .catch(err => this.setState({ error: err.message }))

        } catch (err) {
            this.setState({ error: err.message })
        }
    }



    handleRemovePostit = id => {
        try {
            logic.removePostit(id)
            .then(() => logic.listPostits())
            .then(postits => this.setState({ postits, error: null  }))
            .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }
                   

    handleModifyPostit = (id, text, status) => {
        try {
            logic.modifyPostit(id, text, status)
            .then(() => logic.listPostits())
            .then(postits => this.setState({ postits, error: null  }))
            .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    } 


    render() {
        const { error } = this.state
        return <div>
                <InputForm onSubmit={this.handleSubmit} />
                {error && <Error message={error} />}
                <div className='postits-container'>
                    <div className='postits-container__item'>
                        <p className='postits-container__item__task'>TODO</p>
                        <div>                                        
                            {this.state.postits.map(postit => (postit.status === 'TODO') ? <Post key={postit.id} text={postit.text} id={postit.id} status={postit.status} onDeletePost={this.handleRemovePostit} onUpdatePost={this.handleModifyPostit} /> : null)}
                        </div>
                    </div>
                    <div className='postits-container__item'>
                        <p className='postits-container__item__task'>DOING</p>
                        <div>
                            {this.state.postits.map(postit => (postit.status === 'DOING') ? <Post key={postit.id} text={postit.text} id={postit.id}  status={postit.status} onDeletePost={this.handleRemovePostit} onUpdatePost={this.handleModifyPostit} /> : null)}
                        </div>
                    </div>
                    <div className='postits-container__item'>
                        <p className='postits-container__item__task'>REVIEW</p>
                        <div>
                            {this.state.postits.map(postit => (postit.status === 'REVIEW') ? <Post key={postit.id} text={postit.text} id={postit.id} status={postit.status} onDeletePost={this.handleRemovePostit}  onUpdatePost={this.handleModifyPostit} /> : null)}
                        </div>
                    </div>
                    <div className='postits-container__item'>
                        <p className='postits-container__item__task'>DONE</p>
                        <div>
                            {this.state.postits.map(postit => (postit.status === 'DONE') ? <Post key={postit.id} text={postit.text} id={postit.id} status={postit.status} onDeletePost={this.handleRemovePostit} onUpdatePost={this.handleModifyPostit} /> : null)}
                        </div>
                    </div>
                    
                </div>
            </div>
    }
}

export default Postits
