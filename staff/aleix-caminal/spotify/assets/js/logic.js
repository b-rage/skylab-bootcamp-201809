const LOGIC = {
    spotify: new Spotify(),
    search: function(callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');
        this.spotify.search($('#search input').val()).then(function(result) {
            $(artists.body).html('');
            $.each(result.artists.items, function(i, artist) {
                artists.printItem(artist);
            });

            $(albums.body).html('');
            $.each(result.albums.items, function(i, album) {
                albums.printItem(album);
            });

            callback();
        }).catch(console.error);
    },
    artistAlbums: function(artist, callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');
        this.spotify.getArtist(artist).then(function(result) {
            $(albums.body).html('');
            $.each(result.items, function(i, album) {
                albums.printItem(album);
            });

            callback();
        }).catch(console.error);
    },
    albumTracks: function(album, image, callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');
        this.spotify.getAlbum(album).then(function(result) {
            $(tracks.body).html('');
            $.each(result.items, function(i, track) {
                tracks.printTrack(track, image);
            });

            callback();
        }).catch(console.error);
    },
    alignItems: function() {
        $.each($('.panel__body'), function(i, main) {
            let px, columns = 0;
            let width = main.offsetWidth - (parseFloat(getComputedStyle(main).paddingLeft) + parseFloat(getComputedStyle(main).paddingRight));

            do {
                columns++;
                px = Math.floor(width / columns);
            } while (px > 240);
            $(main).css('grid-template-columns', 'repeat(' + columns + ', ' + columns + 'fr)');
        });
    }
};
