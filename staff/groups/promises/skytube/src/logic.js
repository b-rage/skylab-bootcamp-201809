import { Favourites, WatchLater, Playlists, History } from './model'
import Skylab from './skylab'
import YouTube from './youtube'

// const { Favourites, WatchLater, Playlists, History }  = require('./model')
// const  Skylab = require( './skylab')
// const YouTube = require('./youtube')

const logic = {
    skylab: new Skylab(),
    youtube: new YouTube(),
    auth: JSON.parse(sessionStorage.getItem('auth')) || {},
    video_search: JSON.parse(sessionStorage.getItem('video_search')) || [],
    current_video: JSON.parse(sessionStorage.getItem('current_video')) || {},

    /**
     *
     * @param {string} name user name
     * @param {string} surname user surname
     * @param {string} username user username
     * @param {string} email user email
     * @param {string} password user password
     * @param {string} repPassword repeated password to confirm first password
     *
     * @throws {Error in case of non-string, empty or blank parameters}
     * @throws {Error in case confirmation password does not match password}
     * @throws {Error in case API detects repeated username}
     *
     * @returns {Promise}
    */
    registerUser(name, surname, username, email, password, repPassword) {
        if(typeof name !=='string') throw TypeError (`${name} is not a string`)
        if (!name.trim()) throw Error ('name is blank or empty')

        if(typeof surname !=='string') throw TypeError (`${surname} is not a string`)
        if (!surname.trim()) throw Error ('surname is blank or empty')

        if(typeof username !=='string') throw TypeError (`${username} is not a string`)
        if (!username.trim()) throw Error ('username is blank or empty')

        if(typeof email !=='string') throw TypeError (`${email} is not a string`)
        if (!email.trim()) throw Error ('email is blank or empty')

        if(typeof password !=='string') throw TypeError (`${password} is not a string`)
        if (!password.trim()) throw Error ('first password is blank or empty')

        if(typeof repPassword !=='string') throw TypeError (`${repPassword} is not a string`)
        if (!repPassword.trim()) throw Error ('second password is blank or empty')

        if (password === repPassword) {

            return this.skylab.register({
                name: name,
                surname: surname,
                username: username,
                email: email,
                password: password
            })

        } else {
            throw Error ('Passwords do not match')
        }
    },

    /**
     *
     * @param {string} username user username
     * @param {string} password user password
     *
     * @throws {Error in case of non-string, blank or empty parameters}
     * @throws {Error in case of incorrect credentials}
     *
     * @return {Promise}
     */
    loginUser(username, password) {
        if(typeof username !=='string') throw TypeError (`${username} is not a string`)
        if (!username.trim()) throw Error ('username is blank or empty')

        if(typeof password !=='string') throw TypeError (`${password} is not a string`)
        if (!password.trim()) throw Error ('password is blank or empty')

        return this.skylab.login({
            username: username,
            password: password
        })
            .then(data => {
                this.auth.id = data.id
                this.auth.token = data.token
                sessionStorage.setItem('auth', JSON.stringify(this.auth))
                return this.skylab.info(this.auth.id, this.auth.token)
                    .then(info => {
                        let auth_info = {
                            username: info.username,
                            name: info.name,
                            surname: info.surname,
                            email: info.email
                        }

                        sessionStorage.setItem('auth_info', JSON.stringify(auth_info))
                        auth_info.favourites = info.favourites || []
                        sessionStorage.setItem('favourites', JSON.stringify(auth_info.favourites))
                        auth_info.watch_later = info.watch_later || []
                        sessionStorage.setItem('watch_later', JSON.stringify(auth_info.watch_later))
                        auth_info.playlists = info.playlists || []
                        sessionStorage.setItem('playlists', JSON.stringify(auth_info.playlists))
                        auth_info.history = info.history || []
                        sessionStorage.setItem('history', JSON.stringify(auth_info.history))
                        return auth_info
                    })
                    .catch(error => {
                        throw Error(error)
                    })
            })
    },

    /**
     *
     * Log out the user by deleting the user information from session Storage
     */
    logoutUser() {
        sessionStorage.removeItem('auth')
        sessionStorage.removeItem('auth_info')
        sessionStorage.removeItem('video_search')
        sessionStorage.removeItem('current_video')
        sessionStorage.removeItem('favourites')
        sessionStorage.removeItem('history')
        sessionStorage.removeItem('watch_later')
        sessionStorage.removeItem('playlists')
        this.auth = {}
    },

    /**
     *
     * @returns {boolean}
     */
    isAuthenticated() {
        return this.auth && Object.keys(this.auth).length > 0
    },

    /**
     *
     * @param {string} query
     *
     * @throws {Error on non-string, empty or blank parameters}
     * @throws {Error on non-string, empty or blank parameters}
     *
     * @returns {Promise}
     */
    search(query) {
        if(typeof query !== 'string') throw TypeError(`${query} is not a string`)
        if(!query.trim()) throw Error ('query is blank or empty')

        return this.youtube.search(query)
            .then(result => {
                let videos = []
                result.forEach(item => {
                    videos.push({
                        id: item.id.videoId,
                        title: item.snippet.title,
                        thumbnail: item.snippet.thumbnails.medium.url,
                    })
                })

                sessionStorage.setItem('video_search', JSON.stringify(videos))
                return videos
            })
    },

    /**
     *
     * @param {object} video
     *
     * @throws {Error on non-object parameter}
     * @throws {Error if error occurs when retrieving music video from the youtube api}
     *
     * @returns {Promise}
     */
    getVideo(video) {
        if (typeof video !== 'object') throw TypeError(`${video} is not an object`)

        return this.youtube.getVideoPlayer(video.id)
            .then(result => {
                this.addHistory(video)
                video.iframe = result[0].player.embedHtml
                sessionStorage.setItem('current_video', JSON.stringify(video))
                return video
            })
            .catch(error => {
                throw Error(error)
            })
    },


    /**
     *
     * @param {object} video
     *
     * @returns {Favourites}
     */
    addFavourite(video) {
        const favouritesTable = new Favourites()
        const favourite = favouritesTable.newEntity({
            id: video.id,
            title: video.title,
            thumbnail: video.thumbnail
        }).save()
        this.skylab.update({favourites: favouritesTable.all()}, this.auth.id, this.auth.token)
        return favourite
    },

    /**
     *
     * @param {string} video_id
     */
    removeFavourite(video_id) {
        const favouritesTable = new Favourites()
        let video = favouritesTable.get(video_id)
        video.delete()
        this.skylab.update({favourites: favouritesTable.all()}, this.auth.id, this.auth.token)
    },

    /**
     *
     * @param {object} video
     *
     * @returns {WatchLater}
     */
    addWatchLater(video) {
        const watchLaterTable = new WatchLater()
        const watch_later = watchLaterTable.newEntity({
            id: video.id,
            title: video.title,
            thumbnail: video.thumbnail
        }).save()
        this.skylab.update({watch_later: watchLaterTable.all()}, this.auth.id, this.auth.token)
        return watch_later
    },

    /**
     *
     * @param {string} video_id
     */
    removeWatchLater(video_id) {
        const watchLaterTable = new WatchLater()
        let video = watchLaterTable.get(video_id)
        video.delete()
        this.skylab.update({watch_later: watchLaterTable.all()}, this.auth.id, this.auth.token)
    },

    /**
     *
     * @param {string} title
     *
     * @returns {Playlists}
     */
    addPlaylist(title) {
        const playlistsTable = new Playlists()
        const playlist = playlistsTable.newEntity({
            title: title
        }).save()
        this.skylab.update({playlists: playlistsTable.all()}, this.auth.id, this.auth.token)
        return playlist
    },

    /**
     *
     * @param {string} video_id
     */
    removePlaylist(playlist_id) {
        const playlistsTable = new Playlists()
        let playlist = playlistsTable.get(playlist_id)
        playlist.delete()
        this.skylab.update({playlists: playlistsTable.all()}, this.auth.id, this.auth.token)
    },

    /**
     *
     * @param {number} playlist_id
     * @param {string} title
     *
     * @returns {Playlists}
     */
    updatePlaylist(playlist_id, title) {
        const playlistsTable = new Playlists()
        let playlist = playlistsTable.get(playlist_id)
        playlist.title = title
        playlist.save()
        this.skylab.update({playlists: playlistsTable.all()}, this.auth.id, this.auth.token)
        return playlist
    },

    /**
     *
     * @param {object} video
     *
     * @returns {History}
     */
    addHistory(video) {
        const historyTable = new History()
        let history = historyTable.get(video.id)
        if (history && Object.keys(history).length > 0) {
            history.viewed = Date.now()
            history.save()
        } else {
            history = historyTable.newEntity({
                id: video.id,
                title: video.title,
                thumbnail: video.thumbnail,
                viewed: Date.now()
            }).save()
        }

        const allHistory = historyTable.all()
        if (allHistory.length > 20) {
            historyTable.get(allHistory[0].id).delete()
        }

        this.skylab.update({history: allHistory}, this.auth.id, this.auth.token)
        return history
    },

    /**
     *
     * @param {object} video
     * @param {number} playlist_id
     *
     * @returns {Playlists}
     */
    addVideoToPlaylist(video, playlist_id) {
        const playlistsTable = new Playlists()
        let playlist = playlistsTable.get(playlist_id)
        playlist.videos ? playlist.videos.push(video) : playlist.videos = [video]
        playlist.save()
        this.skylab.update({playlists: playlistsTable.all()}, this.auth.id, this.auth.token)
        return playlist
    },

    /**
     *
     * @param {string} video_id
     * @param {number} playlist_id
     *
     * @returns {Playlists}
     */
    removeVideoFromPlaylist(video_id, playlist_id) {
        const playlistsTable = new Playlists()
        let playlist = playlistsTable.get(playlist_id)
        playlist.videos.splice(playlist.videos.indexOf(video_id), 1)
        playlist.save()
        this.skylab.update({playlists: playlistsTable.all()}, this.auth.id, this.auth.token)
        return playlist
    },

    /**
     *
     * @returns {Promise}
     */
    getMostPopular() {
        return this.youtube.mostPopular()
            .then(result => {
                let popular = []
                result.forEach(item => {
                    popular.push({
                        id: item.id.videoId,
                        title: item.snippet.title,
                        thumbnail: item.snippet.thumbnails.medium.url,
                    })
                })

                return popular
            })
    },

    /**
     *
     * @returns {object}
     */
    getHistory() {
        const historyTable = new History()
        let history = historyTable.all()
        history.sort((a, b) => {
            return a.viewed < b.viewed;
        })

        return {
            title: 'History',
            videos: history
        }
    },

    /**
     *
     * @returns {object}
     */
    getFavourites() {
        const favouritesTable = new Favourites()
        return {
            title: 'Favourites',
            videos: favouritesTable.all()
        }
    },

    /**
     *
     * @returns {Favourites}
     */
    getFavourite(favourite_id) {
        const favouritesTable = new Favourites()
        return favouritesTable.get(favourite_id)
    },

    /**
     *
     * @returns {object}
     */
    getWatchLaters() {
        const watchLaterTable = new WatchLater()
        return {
            title: 'Watch Later',
            videos: watchLaterTable.all()
        }
    },

    /**
     *
     * @returns {WatchLater}
     */
    getWatchLater(watchLaterId) {
        const watchLaterTable = new WatchLater()
        return watchLaterTable.get(watchLaterId)
    },


    /**
     *
     * @param {number} id
     *
     * @returns {Playlists}
     */
    getPlaylist(id) {
        const playlistsTable = new Playlists()
        return playlistsTable.get(id)
    },

    /**
     *
     * @returns {object}
     */
    authInfo() {
        let info = JSON.parse(sessionStorage.getItem('auth_info')) || {}
        if (info && Object.keys(info).length > 0) {
            info.favourites = JSON.parse(sessionStorage.getItem('favourites'))
            info.history = JSON.parse(sessionStorage.getItem('history'))
            info.watch_later = JSON.parse(sessionStorage.getItem('watch_later'))
            info.playlists = JSON.parse(sessionStorage.getItem('playlists'))
        }

        return info
    }
}

export default logic

// module.exports = logic
