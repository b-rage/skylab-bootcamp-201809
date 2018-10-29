const PLAYER = document.querySelector('#player');
const PLAY = document.querySelector('#play');
const STOP = document.querySelector('#stop');
const PROGRESS = document.querySelector('#progress');
const TIME_AHEAD = document.querySelector('#time-ahead');
const TIME_LEFT = document.querySelector('#time-left');

function secondsToTime(time) {
    minutes = Math.floor(time / 60);
    seconds = ('0' + Math.floor(time - minutes * 60)).slice(-2);
    return minutes + ':' + seconds;
}

PLAY.addEventListener('click', function() {
    PLAYER.paused ? PLAYER.play() : PLAYER.pause();
});

STOP.addEventListener('click', function() {
    PLAYER.pause();
    PLAYER.removeAttribute('src');
    TIME_AHEAD.innerHTML = '-:--';
    TIME_LEFT.innerHTML = '-:--';
    PROGRESS.style.width = 0;

    $(footer.current).html('');
    search.show('flex');
    artists.hide();
    albums.hide();
    tracks.hide();
});

PLAYER.addEventListener('timeupdate', function() {
    TIME_AHEAD.innerHTML = secondsToTime(PLAYER.currentTime);
    TIME_LEFT.innerHTML = '-' + secondsToTime(PLAYER.duration - PLAYER.currentTime);
    PROGRESS.style.width = ((PLAYER.currentTime / PLAYER.duration) * 100) + '%';
});
