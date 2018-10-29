import React from 'react'

function Error(props) {
    return  <div className="div__error">
        <div className="background">
            <div className="error__center">
                <div className="div__x">
                    <i onClick={props.onErrorClose} className="far fa-times-circle x"></i>
                </div>
                <p className="error">{props.message}</p>
            </div>
        </div>
    </div>
}

export default Error