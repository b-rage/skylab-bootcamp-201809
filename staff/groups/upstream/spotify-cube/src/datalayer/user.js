class Track {

    
    get Id() {
        return this.id;
    }

    set Id(value) {
        if ( typeof value !== "string") throw TypeError(`id track is not a string`)
        if (!value.trim().length) throw Error(`id track is empty or blank`)

        this.id = value;
    }

    get Name() {
        return this.name;
    }

    set Name(value) {
        if ( typeof value !== "string") throw TypeError(`name track is not a string`)
        if (!value.trim().length) throw Error(`name track is empty or blank`)

        this.name = value;
    }

    get Image() {
        return this.image;
    }

    set Image(value) {
        if ( typeof value !== "string") throw TypeError(`image track is not a string`)
        if (!value.trim().length) throw Error(`image track is empty or blank`)

        this.image = value;
    }

    get Preview_url() {
        return this.preview_url;
    }

    set Preview_url(value) {
        if ( typeof value !== "string") throw TypeError(`preview_url track is not a string`)
        if (!value.trim().length) throw Error(`preview_url track is empty or blank`)

        this.preview_url = value;
    }

    static createTrackFromData(data){

        let track = new Track()
        for(let p in data){

            track[p] = data[p]
        } 
        return track
    }
}


class Playlist {

    constructor(_id) {
        
        this.tracks = [];
    }


    get Id() {
        return this.id;
    }

    set Id(value) {
        if ( typeof value !== "string") throw TypeError(`id playlist is not a string`)
        if (!value.trim().length) throw Error(`id playlist is empty or blank`)

        this.id = value;
    }

    get Name() {
        return this.name;
    }

    set Name(value) {
        if ( typeof value !== "string") throw TypeError(`name is not a string`)
        if (!value.trim().length) throw Error(`name is empty or blank`)

        this.name = value;
    }

    get Image() {
        return this.image;
    }

    set Image(value) {
        if ( typeof value !== "string") throw TypeError(`image is not a string`)
        if (!value.trim().length) throw Error(`image is empty or blank`)

        this.image = value;
    }

    get Tracks() {
        return this.tracks;
    }

    set Tracks(value) {
        if ( !Array.isArray(value)) throw TypeError(`tracks is not an array`)
        this.tracks = value;
    }

    findTrack(trackId){
        
        return this.tracks.find((el) => el.id === trackId)
    }

    addTrack (track) {

        if ((track) && (track.Id) && (typeof track.Id === "string")) {
            if (!this.tracks.length) this.tracks.push(track)

            if (!this.findTrack(track.Id))
                this.tracks.push(track)
            else
                throw Error("The track exists in the playlist")
        }
        else
            throw Error("Track object is invalid")
        
    }

    deleteTrack (trackId) {

        if (this.tracks.length === 0) throw Error("The playlist has not tracks")

        if (this.tracks.find((el) => el.id === trackId)){
            let index = this.tracks.indexOf((el) => el.id === trackId)
            this.tracks.splice(index, 1)
            return true

        }
        else
            throw Error("The track not exists in the playlist")
    }

}



class User {

    constructor(){
        this.playLists = []
    }

    get Name(){
        return this.name;
    }

    set Name (value){
        if ( typeof value !== "string") throw TypeError(`name is not a string`)
        if (value.trim().length === 0) throw Error(`name is empty or blank`)

        this.name = value;
    }


    get Surname() {
        return this.surname;
    }

    set Surname(value) {
        if ( typeof value !== 'string') throw TypeError(`surname is not a string`)
        if (!value.trim().length) throw Error(`surname is empty or blank`)

        this.surname = value;
    }


    get Email() {
        return this.email;
    }

    set Email(value) {
        if ( typeof value !== 'string') throw TypeError(`email is not a string`)
        if (!value.trim().length) throw Error(`email is empty or blank`)
        if (value.indexOf('@') === -1) throw Error(`email is not an email`)

        this.email = value;
    }


    get Username() {
        return this.username;
    }

    set Username(value) {
        if ( typeof value !== 'string') throw TypeError(`username is not a string`)
        if (!value.trim().length) throw Error(`username is empty or blank`)

        this.username = value;
    }


    get Password() {
        return this.password;
    }

    set Password(value) {
        if ( typeof value !== 'string') throw TypeError(`password is not a string`)
        if (!value.trim().length) throw Error(`password is empty or blank`)

        this.password = value;
    }    


    get Playlists() {
        return this.playLists;
    }

    set Playlists(value) {
        if ( !Array.isArray(value)) throw TypeError(`Playlist is not an array`)
        this.playLists = value;
    }

    static createUserFromData(data){

        let user = new User()
        for(let p in data){

            user[p] = data[p]
        } 
        return user
    }
     
    createPlayList (playList) {

        if (this.playLists.length === 0)
            this.playLists.push(playList)
        else
        {
            const ele = this.playLists.find(el => el.name === playList.name)
            if (!ele){
                this.playLists.push(playList)                        
            }
            else
                throw Error("Exists a play list with the name: " + playList.name)
        }
    }

    
    deletePlayList (playListId) {

        if ( typeof playListId !== 'string') throw TypeError(`playListId is not a string`)
        if (!playListId.trim().length) throw Error(`playListId is empty or blank`)

        if (this.playLists.find(p => p.id === playListId)){            
            let index = this.playLists.indexOf(el => el.id === playListId)
            this.playLists.splice(index,1)
        }
        else
            throw Error("PlayList not found")

    }

    existsTrackInPlayList = (trackId) => {

        if ( typeof trackId !== 'string') throw TypeError(`trackId is not a string`)
        if (!trackId.trim().length) throw Error(`trackId is empty or blank`)
        let found = false;
        if (this.playLists.length){

            this.playLists.forEach(playlist => {
                
                playlist.tracks.forEach(track => {

                    if (track.id === trackId)
                    {
                        found = true
                       
                    }

                })
               

            });
            return found
        }
        else
            throw Error("The user has no playlists")
    }


    searchTrackInPlayLists = (trackId) => {

        if ( typeof trackId !== 'string') throw TypeError(`trackId is not a string`)
        if (!trackId.trim().length) throw Error(`trackId is empty or blank`)
        let playListId = undefined;
        if (this.playLists.length){

            this.playLists.forEach(playlist => {
                
                playlist.tracks.forEach(track => {

                    if (track.id === trackId)
                    {
                        playListId = playlist.id
                       
                    }

                })
               

            });
            return playListId
        }
        else
            throw Error("The user has no playlists")
    }

    deleteTrackFromPlayList (trackId){

        const playListId = this.searchTrackInPlayLists(trackId)

        if (playListId){

            let playList = this.playLists.find(playlist => playlist.id === playListId)
            const filtered = playList.tracks.filter(track => track.id !== trackId)
            playList.tracks = filtered
        }
        else
            throw Error("The track does not belong to any playList")
    }
}

export default {
    User,
    Track,
    Playlist
}

//Para teatear:
// module.exports = {
//     User,
//     Track,
//     Playlist
// }