import React from 'react';
import PostitModalComponent from './postitmodal'
import $ from 'jquery';

class PostItComponent extends React.Component {

    showModal = () => {

        $('#' + this.props.id).modal('show');

    }

    handleSubmittedText = (text) => {

       
        this.props.onUpdatePost(this.props.id, text);

    }

    
    render() {
        return <article className="postit">{this.props.message}
            <PostitModalComponent id = {this.props.id} oldmessage = {this.props.message} onSubmittedText={this.handleSubmittedText} />
            <a  onClick={() => { this.props.onDeletePost(this.props.id) } } href="#" className="icon-x"></a>
            <button onClick={(ev) => this.showModal()} className="btn btn-primary btn-lg">Edit</button>
        </article>
    }
}

export default PostItComponent