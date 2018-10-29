import React, {Component} from 'react'

class Search extends Component {
    state = {search: ''}

    handleOnChange = event => {
        this.setState({search: event.target.value})
    }

    handleOnkeyPress = event => {
        if (event.key === 'Enter') {
            this.handleSearch()
        }
    }

    handleSearch = () => {
        if (this.state.search.trim()) {
            this.props.onSearch(this.state.search)
        }
    }

    render() {
        return <div className="search">
            <input className="search__input" type="search" value={this.state.search} placeholder="Search" onChange={this.handleOnChange} onKeyPress={this.handleOnkeyPress} />
            <button className="search__button" onClick={this.handleSearch}>
                <span className="fas fa-search"></span>
            </button>
        </div>
    }
}

export default Search
