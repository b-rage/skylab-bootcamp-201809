import React, { Component } from 'react'
import Menu from './Menu'
import Notes from './Notes'


class Home extends Component {

    state={
        texts:this.props.postits
    }


    render() {
        return <div>

            <div className="container" />

            <h1>Post-It App</h1>

            <Menu onSubmit={this.handleSubmit} />

            <section className="posts-container">
                <p>{this.props.postits}</p>
                {/* {this.props.postits.map((postit) => { return <Notes key={postit.id} text={postit.text} index={postit.id} handleDelete={this.props.handleDelete} handleEditPost={this.props.handleEditPost}   />})} */}

            </section>

        </div>
    }

}

export default Home

{/* <Notes key={postit.id} text={postit.text} index={postit.id} handleDelete={this.props.handleDelete} handleEditPost={this.props.handleEditPost} /> */}