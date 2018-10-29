import React, { Component } from 'react'; 

class InputForm extends Component {
    state = { text: '' }

    handleChange = event => { //event aqui es el parametro de entrada

        this.setState({ text : event.target.value})
    
    }

    handleClick = () => {

        this.props.onClick(this.state.text)

        this.setState({ text: '' })
     }

    render() {
        console.log('InputForm', 'render')

        return <header>
            <nav><img src="http://assets.stickpng.com/thumbs/5b06c23efad1cae04539afe5.png" alt=""/></nav>
            <div className="form">
                <textarea placeholder="input your new postit" value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add Postit</button> 
            </div>
        </header> 
        
    }
}
module.exports = InputForm
// export default InputForm