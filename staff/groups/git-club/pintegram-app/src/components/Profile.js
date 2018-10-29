import React, { Component } from 'react'
import logic from '../logic'
import PostUser from './PostUser'
import PostUserLiked from './PostUserLiked'
import logo from '../icon1.png'

class Profile extends Component {
    state = { posts: [], user: [], postsLiked: [], grid: true, liked: false }

    componentDidMount() {
        // progressive loading

        logic.listPosts()
            .then(posts => { this.setState({ posts }) })

        logic.retrieveProfile()
            .then(user => { this.setState({ user }) })

        logic.listLikes()
            .then(postsLiked => logic.retrievePosts(postsLiked).then(postsLiked => { this.setState({ postsLiked }) }))

        // one-shot loading

        // Promise.all([logic.listPosts(), logic.retrieveProfile(), logic.listLikes().then(postsLiked => logic.retrievePosts(postsLiked))])
        //     .then(([posts, user, postsLiked]) => {
        //         this.setState({ posts, user, postsLiked })
        //     })
    }

    uploadWidget = () => {
        let widget = window.cloudinary.openUploadWidget({ cloud_name: 'skylabcoders', upload_preset: 'wqmshx2h', tags: ['pintegram'] },
            (error, result) => {

                if (result.event === "success") {
                    debugger

                    const img = result.info.secure_url

                    widget.close()

                    logic.addImageProfile(img)
                        .then(() => logic.retrieveProfile())
                        .then(user => this.setState({ user }))
                }
            })
        console.log()
    }

    handleGallery = () => {
        this.setState({ grid: true, liked: false })
    }

    handleLiked = () => {
        this.setState({ grid: false, liked: true })
    }

    handleDeletePost = (idPost) => {
        logic.deletePost(idPost)
            .then(Promise.all([logic.listPosts(), logic.retrieveProfile(), logic.listLikes().then(postsLiked => logic.retrievePosts(postsLiked))])
                .then(([posts, user, postsLiked]) => {
                    this.setState({ posts, user, postsLiked })
                })
            )
    }
    handleDeleteLike = (idPost) => {
        logic.onDeleteLike(idPost)
            .then(Promise.all([logic.listPosts(), logic.retrieveProfile(), logic.listLikes().then(postsLiked => logic.retrievePosts(postsLiked))])
                .then(([posts, user, postsLiked]) => {
                    this.setState({ posts, user, postsLiked, liked: true })
                })
            )
    }

    render() {
        return <div className="div-home">
            <nav className="nav"> <div className="logo"><img onClick={this.props.onGoBack} className="logo__img" src={logo}></img><h1 onClick={this.props.onGoBack} className="title">Pintegram</h1></div>
                <div className="menu">
                    <i onClick={this.props.onSearch} className="menu__button fas fa-search"></i>
                    <i onClick={this.props.onPost} className="menu__button fas fa-upload"></i>
                    <i className="menu__button fas fa-user"></i>
                    <i onClick={this.props.onLogout} className="menu__button fas fa-sign-out-alt"></i>
                </div>
            </nav>
            <section className="profile">
                <div className="profile__center">
                    <div className="profile__img">
                        <div className="img__container"><img className="profile__img-small " src={this.state.user.img ? this.state.user.img : "https://res.cloudinary.com/skylabcoders/image/upload/v1540218439/skylabcoders/profile-icon-png-910.png"}></img> <i onClick={this.uploadWidget} className="fas fa-pen icon icon__profile"></i></div>
                    </div>
                    <div className="profile__info">
                        <p>{this.state.user.username}</p>
                        <div className="info__stadistics">
                            <p className="stadistics">Posts {this.state.posts ? this.state.posts.length : '0'}</p>
                            <p className="stadistics">Follows {this.state.follows ? this.state.follows.length : '0'}</p>
                            <p className="stadistics">Followers {this.state.followers ? this.state.followers.length : '0'}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="gallery">
                {!this.state.grid ? <i onClick={this.handleGallery} className="fas fa-th icon icon__gallery"></i> : <i onClick={this.handleGallery} className="fas fa-th icon icon-check"></i>} {!this.state.liked ? <i className="fas fa-bookmark icon icon__gallery" onClick={this.handleLiked}></i> : <i className="fas fa-bookmark icon icon-check" onClick={this.handleLiked}></i>}
            </div>
            {this.state.grid && !this.state.liked && <section className="gallery">
                {this.state.posts.map(post => <PostUser key={post.id} id={post.id} url={post.url} text={post.description} onDeletePost={this.handleDeletePost} onUpdatePost={this.handleUpdatePost} />)}
            </section>}

            {!this.state.grid && this.state.liked && <section className="gallery">
                {this.state.postsLiked.map((post, index) => <PostUserLiked key={index} id={post.id} url={post.url} text={post.description} onDeleteLike={this.handleDeleteLike} onUpdatePost={this.handleUpdatePost} />)}
            </section>}
        </div>
    }
}

export default Profile
