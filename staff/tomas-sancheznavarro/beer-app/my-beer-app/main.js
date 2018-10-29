function search(query, callback) {
    var xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         // console.log(xhr.responseText);

    //         var res = JSON.parse(xhr.responseText);

    //         // console.log(res);

    //         callback(res);
    //     }
    // };
    // xhr.addEventListener("progress", updateProgress);

    xhr.addEventListener("load", function () {
        var res = JSON.parse(xhr.responseText);

        callback(res);
    });

    xhr.addEventListener("error", function () {
        callback([]);
    });

    xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query);

    xhr.send();
}

function retrieveBeer(id, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        var res = JSON.parse(xhr.responseText);

        callback(res);
    });

    xhr.addEventListener("error", function () {
        callback([]);
    });

    xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id);

    xhr.send();
}

var form = document.getElementById('search-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var input = document.getElementById('search-query');

    var query = input.value;

    search(query, function (beers) {
        var uls = document.getElementsByTagName('ul');

        var cards = document.getElementsByTagName('section');

        if (cards.length) {
            document.body.removeChild(cards[0]);
        }

        if (uls.length) {
            document.body.removeChild(uls[0]);
        }

        if (beers.length) {
            var ul = document.createElement('ul');

            beers.forEach(function (beer) {
                // console.log(beer.id, beer.name);

                var li = document.createElement('li');
                li.innerText = 'Name: ' + beer.name + ', id: ' + beer.id;

                // TODO on click on beer do retrieve beer and show beer below
                li.addEventListener('click', function () {
                    retrieveBeer(beer.id, function (details) {
                        console.log(details);
                        cards = document.getElementsByTagName('section');

                        if (cards.length) {
                            document.body.removeChild(cards[0]);
                        }

                        var card = document.createElement('section');
                        document.body.appendChild(card);


                        var titles = document.createElement('h2');

                        titles.innerText = details.name;

                        card.appendChild(titles);

                        var image = document.createElement('img');

                        if (details.labels) {
                            image.src = details.labels.medium;
                            card.appendChild(image);
                        } else {
                            var message = document.createElement('h3');
                            message.innerText = '(no image available, using a generic one instead)';
                            card.appendChild(message);
                            image.src = 'https://visualpharm.com/assets/797/Beer-595b40b65ba036ed117d2949.svg';
                            image.style.width = '200px';
                            card.appendChild(image);
                        }

                        var info = document.createElement('p');

                        if (!details.description || !details.style.description) {

                            var message_2 = document.createElement('p');
                            message_2.innerText = 'no description available';
                            card.appendChild(message_2);




                        } else {
                            var title = document.createElement('h3');
                            title.innerText = 'Description';
                            card.appendChild(title);
                            info.innerText = details.description || details.style.description;
                            card.appendChild(info);

                        }
                    });
                });
                ul.appendChild(li);
            });

            document.body.appendChild(ul);

        } else alert('no results');

    });
});