let track_name, artist_name, album_name, artist_image, album_image;

const main = new Component('main', 'main');
document.body.appendChild(main.element);

const footer = new Footer();
document.body.appendChild(footer.element);

const search = new Search('Search Spotify', 'section', function() {
    LOGIC.search(function() {
        artists.show('flex');
        albums.show('flex');
        search.hide();
        tracks.hide();
        LOGIC.alignItems();
    });
});

const artists = new Artists('Artists', 'section', function(id, name, image) {
    artist_name = name;
    artist_image = image;
    $(albums.title).html(artist_name);
    LOGIC.artistAlbums(id, function() {
        albums.show('flex');
        artists.hide();
        tracks.hide();
        search.hide();
        LOGIC.alignItems();
    });
});
const albums = new Albums('Albums', 'section', function(id, name, image) {
    album_name = name;
    album_image = image;
    $(tracks.title).html(album_name);
    LOGIC.albumTracks(id, album_image, function() {
        tracks.show('flex');
        albums.hide();
        artists.hide();
        search.hide();
        LOGIC.alignItems();
    });
});

const tracks = new Tracks('Songs', 'section', function(url, name) {
    track_name = name;
    footer.printCurrent(album_image, track_name, artist_name, album_name);
    $(PLAYER).attr("src", url);
    PLAYER.play();
});

$(main.element).append(search.element);
$(main.element).append(artists.element);
$(main.element).append(albums.element);
$(main.element).append(tracks.element);

window.addEventListener('resize', function() {
    LOGIC.alignItems();
});
