import React, {Component} from 'react'
import  Cube  from '../cube/cube';
import { Route, withRouter, Redirect } from 'react-router-dom'
import Landing from '../landing/landing'


class App extends Component{

    state = {image:"", blur:"0px"}

    handleClickEnter = () => {
     
        this.props.history.push('/cube')
    }

    setBackGround = (image) =>{

        this.setState({image, blur:"6px"})
    }

    handleClearSearch = () =>{
        this.setState({image:"",blur:"0px"})

    }

    render(){
    return <div>
            <div className="back-image" style={{"filter":`blur(${this.state.blur})`,"background-image":`url(${this.state.image})`}}></div>
                <Route exact path="/" render={() => <Landing onClickEnter = {this.handleClickEnter}></Landing>} />
                <Route path="/cube" render={() =><Cube onClearSearch={this.handleClearSearch} setBackGround={this.setBackGround} ></Cube> } />
            </div>
    }
}

export default withRouter(App)