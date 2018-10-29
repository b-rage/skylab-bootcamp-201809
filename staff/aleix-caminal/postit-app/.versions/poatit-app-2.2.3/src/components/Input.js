import React from 'react'

function formatLabel(label) {
    let words = label.split('_');
    words.forEach(function(word, i) {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    });
    return words.join(' ');
}

function Input(props) {
    return <div className="form__group">
        <label className="form__label">{formatLabel(props.name)}</label>
        <input className="form__input" name={props.name} type={props.type ? props.type : 'text' } />
    </div>
}

export default Input;
