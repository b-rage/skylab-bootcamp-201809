var form = document.getElementById('search-form');
var list = document.getElementById('beer-list');
var show = document.getElementById('show-beer');

function search(query, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query);
    xhr.addEventListener("load", function() {
        var res = JSON.parse(xhr.responseText);
        callback(res);
    });
    xhr.addEventListener("error", function() {
        alert('no results');
    });
    xhr.send();
}

function retrieveBeer(id, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id);
    xhr.addEventListener("load", function() {
        var res = JSON.parse(xhr.responseText);
        callback(res);
    });
    xhr.addEventListener("error", function() {
        alert('no beer found');
    });
    xhr.send();
}

function updateFavicon(image) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = image;
    document.getElementsByTagName('head')[0].appendChild(link);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var input = document.getElementById('search-query');
    var query = input.value;
    search(query, function (beers) {
        list.innerText = '';
        beers.forEach(function (beer) {
            var li = document.createElement('li');
            li.innerText = beer.name;
            li.id = beer.id
            li.addEventListener('click', function(event) {
                retrieveBeer(event.target.id, function(r) {
                    show.innerText = '';
                    var text = document.createElement('h4');
                    text.innerText = r.nameDisplay;
                    show.appendChild(text);
                    if (r.labels) {
                        var img = document.createElement('img');
                        img.src = r.labels.large;
                        show.appendChild(img);
                        updateFavicon(r.labels.icon);
                    }
                });
            });
            list.appendChild(li);
        });
    });
});
