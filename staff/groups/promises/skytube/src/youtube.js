const CONFIG = require('./config')

class YouTube {
    constructor(api = 'default') {
        this.root_url = "https://www.googleapis.com/youtube/v3/"
        this.api_key = CONFIG.youtubeDataAPI[api].api_key
    }

    search(query) {
        return fetch(this.root_url+'search?part=snippet&key='+this.api_key+'&q='+query+'&videoCategoryId=10&type=video&maxResults=20', {
            method: 'GET'
        }).then(result => {
            return result.json()
        }).then(json => {
            if (!json.error) return json.items
            throw Error(json.error.message)
        })
    }

    getVideoPlayer(id) {
        return fetch(this.root_url+'videos?part=player&key='+this.api_key+'&id='+id, {
            method: 'GET'
        }).then(result => {
            return result.json()
        }).then(json => {
            if (!json.error) return json.items
            throw Error(json.error.message)
        })
    }

    mostPopular() {
        return fetch(this.root_url+'search?part=snippet&key='+this.api_key+'&char=mostPopular&videoCategoryId=10&type=video&maxResults=10', {
            method: 'GET'
        }).then(result => {
            return result.json()
        }).then(json => {
            if (!json.error) return json.items
            throw Error(json.error.message)
        })
    }
}

export default YouTube

// module.exports = YouTube
