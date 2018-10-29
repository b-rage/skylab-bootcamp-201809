import React from 'react'


function Post(props) {
    
    return <ul className="list-group">
    
    <button onClick={() => props.popup(props.id)} className="btn btn-info"><i className="far fa-edit"></i></button>

    <li className="list-group-item list-group-item-warning">{props.text}</li>    

    <button  className="btn btn-info" onClick={() => props.onDeletePost(props.id)}><i className="far fa-trash-alt"></i></button>    

    </ul>

    
}

export default Post