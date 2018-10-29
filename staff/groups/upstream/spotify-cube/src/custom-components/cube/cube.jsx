import React, { Component } from 'react'
import FrontSide from './frontside/frontside'
import BackSide from './backside/backside'
import BottomSide from './bottomside/bottomside'
import TopSide from './topside/topside'
import RightSide from './rightside/rightside'
import LeftSide from './leftside/leftside'
import userService from '../../services/userlogic'

export default class Cube extends Component {

    state = {modal:false, xdeg: 0, ydeg: -90, artists: [], tracks: [], albums: [], playlists: [], isLogged: false }

    constructor(props) {

        super(props)
        this.xdeg = 0
        document.onkeydown = (ev) => { this.cubeControler(ev.keyCode) }
    }

    componentDidMount() {
        this.addRotation("rotateX--90")
    }


    cubeControler = (keyCode) => {


        switch (keyCode) {


            case 38:  //UP

                if (this.state.ydeg > -90) {
                    this.state.ydeg += -90
                    this.setState({ ydeg: this.state.ydeg })
                }
                break;

            case 40:  //DOWN

                if (this.state.ydeg < 90) {
                    this.state.ydeg += 90
                    this.setState({ ydeg: this.state.ydeg })
                }
                break;

            case 39: //LEFT
                this.state.xdeg += -90
                this.setState({ xdeg: this.state.xdeg })
                break;

            case 37: //RIGHT
                this.state.xdeg += 90
                this.setState({ xdeg: this.state.xdeg })
                break;

        }

    }

    addRotation = (_class) => {

        this.setState({ rotationClass: _class });

    }

    handlerArtistFound = (data) => {

        this.setState({ artists: data }, () => {

            this.state.xdeg += -90
            this.setState({ xdeg: this.state.xdeg })
        })
    }

    handlerTracksFound = (data) => {

        this.setState({ tracks: data }, () => {

            this.state.xdeg += -90
            this.setState({ xdeg: this.state.xdeg })
        })
    }

    handleLogin = (isLogged) => {

        if (isLogged) {

            userService.getUserPlayLists().then(res => {

                if (res.length)
                    res.map(el => {

                        el.image = require("../../assets/img/playlist.png")
                    })

                this.setState({ playlists: res, isLogged: isLogged }, () => {

                    this.state.ydeg += 90
                    this.setState({ ydeg: this.state.ydeg })


                })

            }).catch(err => {})

        }


    }

    handleLogout = () => {

        this.setState({ isLogged: false }, () => {


        })


    }

    refreshPlayLists = () =>{
        
        userService.getUserPlayLists().then(res => {
            
            if (res.length){
                res.map(el => {

                    el.image = require("../../assets/img/playlist.png")
                })
            }
            this.setState({playlists: res}, () => {
                

            })

        }).catch(err => alert(err.message))

    }

    handleRegister = () => {

        this.state.ydeg += 180
        this.setState({ ydeg: this.state.ydeg })

    }

    handleClickRegisterLogin = () => {

        this.state.ydeg += -180
        this.setState({ ydeg: this.state.ydeg })
    }

    handleAlbums = (albums) => {
        this.setState({ albums: albums }, () => {

            this.state.xdeg += -90
            this.setState({ xdeg: this.state.xdeg })


        })
    }

    handleClearSearch = () => {

        this.setState({ artists: [], tracks: [], albums: [] })
        this.props.onClearSearch()
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    

    render() {

        return <section className="container">
           
            <section style={{ transform: "rotateY(" + this.state.xdeg + "deg) rotateX(" + this.state.ydeg + "deg)" }} className="cube">
                <FrontSide onClearSearch={this.handleClearSearch} onArtistFound={this.handlerArtistFound}></FrontSide>
                <BackSide setBackGround={this.props.setBackGround} onTracks={this.handlerTracksFound} albumlist={this.state.albums}></BackSide>
                <LeftSide isLogged = {this.state.isLogged} tracks={this.state.tracks}></LeftSide>
                <RightSide onAlbums={this.handleAlbums} artists={this.state.artists}></RightSide>
                <TopSide onLogout={this.handleLogout} onLogin={this.handleLogin} onClickRegister={this.handleRegister}></TopSide>
                <BottomSide OnCreatedPlayList={this.refreshPlayLists} onRotation={this.addRotation} playlists={this.state.playlists} onClickLogin={this.handleClickRegisterLogin} isLogged={this.state.isLogged}></BottomSide>

            </section>
        </section>

    }
}