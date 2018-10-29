import React from 'react'

function Error(props) {
    return <p className="alert alert-danger">{props.message}</p>
}

module.exports = Error
// export default Error