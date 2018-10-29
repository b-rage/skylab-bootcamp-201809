import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Video from './Video'

class Playlist extends Component {
    state = {
        title: this.props.playlist.title,
        titleEdit: false
    }

    handleEdit = () => {
        this.setState({titleEdit: !this.state.titleEdit})
    }

    handleChange = event => {
        this.setState({title: event.target.value})
    }

    handleBlur = event => {
        this.setState({titleEdit: false})
        this.props.onUpdate(this.props.playlist.id, event.target.value)
    }

    handleKeyPress = event => {
        if (event.key === 'Enter' && event.target.value) {
            this.setState({titleEdit: false})
            this.props.onUpdate(this.props.playlist.id, event.target.value)
        }
    }

    render() {
        return <section className="playlist">
            <section className="playlist-header">
                {!this.state.titleEdit ? (
                    <div>
                        <h1 className="playlist-header__title">{this.props.playlist.title}</h1>
                        <p className="playlist-header__text">{this.props.playlist.videos && this.props.playlist.videos.length > 0 ? this.props.playlist.videos.length + ' videos' : 'Empty playlist'}</p>
                    </div>
                ) : (
                    <input className="playlist-header__input" defaultValue={this.props.playlist.title} onChange={this.handleChange} onBlur={this.handleBlur} onKeyPress={this.handleKeyPress} />
                )}
                <Route path='/home/playlist' render={() => <div>
                    <button className="playlist-header__button" onClick={this.handleEdit}><span className="fas fa-pen"></span></button>
                    <button className="playlist-header__button" onClick={() => this.props.onRemove(this.props.playlist.id)}><span className="fas fa-trash"></span></button>
                </div>} />
            </section>
            <section className="playlist-main">
                {this.props.playlist.videos && this.props.playlist.videos.length > 0 && (
                    this.props.playlist.videos.map(video => {
                        return <Video key={video.id} video={video} onClick={this.props.onVideoClick} />
                    })
                )}
            </section>
        </section>
    }
}

export default Playlist
