import React, {Component} from 'react'

export default class Search extends Component{

    state = {message:"", search:""}

    componentWillReceiveProps(props){

        this.setState({message:props.message}, () => {

            setTimeout(() => {
                this.setState({message:""})                
            }, 3000)

        });
    }

    handleChange = (ev) =>{

        this.setState({search:ev.target.value}) 
    }

    handleSearch = (ev) => {
        ev.preventDefault();
       
        this.props.onSearch(this.state.search)

    }

    handleClearSearch = () =>{
        this.setState({search:""})
        this.props.onClearSearch();

    }

    render(){
        return (
            
                <form className="custom-form" onSubmit = {this.handleSearch}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Search Artits</label>
                        <input onChange={ this.handleChange} value={this.state.search} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Search Artits..." autofocus/>
                    </div>
                    <button type="submit" className="btn btn-primary">Search Artits</button>
                    <button onClick={this.handleClearSearch} type="button" className="btn btn-primary">Clear search</button>
                    <h2>{this.state.message}</h2>
                </form>
           
        );
    }
}
