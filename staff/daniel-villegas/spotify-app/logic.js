const logic = {
    token:'BQBobJkH5xSM_lJ5BWsbzbPAjg_fSosqsYfZBEva54OgcAD_Q_BxBAKWkNA8BVYZuYaYc2Nabc6hlSqJ7RtF1YOIeQVSeZ0PErbuAMfJcapG8o3FkITrF0D58DhiFibs3XXncEZi5Gl6Eg',

    call(path) {
        // if (typeof path !== 'string') throw TypeError(path + ' is not a string');
        // if (!path.trim().length) throw Error(path + 'is empty or blank');

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', () => {
                var res = JSON.parse(xhr.responseText)

                if (res.error) return reject(new Error(res.error.message))

                resolve(res)
            })

            xhr.addEventListener('error', () => reject() )

            // if (!path) throw TypeError (path + 'is not valid search')

            xhr.open('get', `https://api.spotify.com/v1/${path}`)

            xhr.setRequestHeader('authorization', `Bearer ${this.token}`)

            xhr.send()
        })
    },

    searchAlbums(id) {
        if (typeof id !== 'string') throw TypeError(`${id} is not a string`);
        if (!id.trim().length) throw Error(`${id} is empty or blank`);

        return this.call(`search?type=artist&query=${id}`)
            .then(({ artists: { items } }) => items)
        
    },

    searchSongs(albumId) {
        if (typeof albumId !== 'string') throw TypeError(albumId + ' is not a string');
        if (!albumId.trim().length) throw Error(albumId + 'is empty or blank');

        return this.call(`artists/${id}/albums`)
            .then(({ items }) => items)
            
    },

    playSong(song) {$player.attr('src', song)}
}