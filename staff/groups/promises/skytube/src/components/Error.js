import React from 'react'

function Error(props) {
    return props.error && (
        <div className="error">
            <p className="error__text">{props.error}</p>
        </div>
    )
}

export default Error
