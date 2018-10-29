import React, {Component} from 'react';

function Post(props) {
    console.log('Post', '"render"')

    return <article className="post">
        <textarea className="textarea" disabled id={props.id} defaultValue={props.text}></textarea>

        <button onClick={() => props.onDeletePost(props.id)}><i className="far fa-trash-alt"></i></button>
        <button onClick={() => props.onEditPost(props.id)}><i className="far fa-edit"></i></button>
    </article>
}

// class Post extends Component {
//         state = { text : ''}

//         handleblur = () =>{
            
//         }

//         handleChange = event =>{
//             const text = event.target.value

//             this.setState({ text })
//         }


//         render (){
//             return <article className="post">
// //         <textarea className="textarea" disabled id={props.id} defaultValue={props.text} onChange={this.handleChange} onBlur={this.handleBlur}></textarea>

// //         <button onClick={() => props.onDeletePost(props.id)}><i className="far fa-trash-alt"></i></button>
// //         <button onClick={() => props.onEditPost(props.id)}><i className="far fa-edit"></i></button>
// //     </article>
//         }


// }



export default Post