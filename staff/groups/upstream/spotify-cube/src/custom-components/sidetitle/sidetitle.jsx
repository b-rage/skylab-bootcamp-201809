import React, {Component} from 'react'


export default class SideTitle extends Component{

    state = {messageButton:""}

     componentWillReceiveProps(props){
       
       
            this.setState({messageButton:props.messageButton})
 
    }

    handleClickButton = () =>{
     
        this.props.onClickAddPlayList();
    }

    
    render = () =>{
        return (
            
            <section className="panel-inf">
                <section className="panel-inf__main-section">
                    <section className="panel-inf__main-section__img-section">
                        {!this.props.showAddPlayListButton && <img src={this.props.logo} />}
                        {this.props.showAddPlayListButton && <button onClick={this.handleClickButton} className="btn btn-sm btn-warning">{this.state.messageButton}</button>}
                    </section>
                    <section className="panel-inf__main-section__name-section">
                        <h1>
                            {this.props.title}
                        </h1>
                    </section>
                </section>
            </section>
        ) 
    }   
}