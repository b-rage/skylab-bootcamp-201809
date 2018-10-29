import React from 'react'
import SignUp from './SignUp'

function Header(props) {
    return <header className="header">
        <section className="header__hero">
            <h1 className="header__title">Enjoyable.</h1>
            <p className="header__text">
                Skytube makes easy to enjoy your favourite music videos.
                With one click, you can save videos to watch later or add them to your favourites.
                Also, create your own playlists and have them always available.
            </p>
            <p className="header__text">
                Enjoy the music and dance like no one is watching!
            </p>
        </section>
        <SignUp error={props.error} onSubmit={props.onSubmitSignUp}/>
    </header>
}

export default Header
