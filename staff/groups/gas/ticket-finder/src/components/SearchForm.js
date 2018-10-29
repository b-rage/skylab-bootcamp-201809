import React, { Component } from 'react'
import { Button, Input } from "mdbreact"




class SearchForm extends Component {

   state = { query: '', dropwdown: 'all' }

   handleInput = event => {

       const query = event.target.value

       this.setState({ query })
   }

   handleSubmit = event => {

       event.preventDefault()
    
       this.props.onSubmit(this.state.query)

       this.setState({ query: '' })
   }

   dropDownHandle = (e) => {

    this.setState({dropwdown : e.target.value}, () => this.props.onDropDownChange(this.state.dropwdown))

   }

   render() {

       return <div className='searchForm-container-music'>
       <form onSubmit={this.handleSubmit}>

       <div className='container-search'>

       <Input label="Search events" value={this.state.query} onChange={this.handleInput}/>

       <Button type="submit" color="unique">Search</Button>

       <select className="dropdown" onChange={this.dropDownHandle}>

       <option  value="All">All</option>

        <option  value="Sports">Sports</option>

        <option value="Music">Music</option>
        
        </select>

       </div>

     </form>

     </div>
   }
}

export default SearchForm