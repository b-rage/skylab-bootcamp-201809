import React, { Component } from 'react'
import logic from '../logic'
class Post extends Component {
    state = { url: this.props.url }


     //Lo mismo que antes, lo dejo para recordarme como es la sintaxis y comunicacion entre componentes.
    // handleChange = event => {
    //     const text = event.target.value

    //     this.setState({ text })
    // }

    // handleBlur = () => {
    //     this.props.onUpdatePost(this.props.id, this.state.text)
    // }

    render() {

        return <article className='post'>
                <img src={this.state.url}></img>
                <button onClick={()=>this.props.changePrivate(this.props.id)}>Make private/public</button>
                <button onClick={()=> this.props.onDeletePost}>Delete</button>
                </article>

        //Lo mismo que antes, este componente aun no esta acabado.       
        // return <article className="post">
        //     <textarea defaultValue={this.state.text} onChange={this.handleChange} onBlur={this.handleBlur} />

        //     <button onClick={() => this.props.onDeletePost(this.props.id)}><i className="far fa-trash-alt"></i></button>
        // </article>
    }
}

export default Post