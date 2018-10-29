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
    // xhr.addEventListener("abort", transferCanceled);

    xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query);

    xhr.send();
}

function retrieveBeer(id, callback) {
    // TODO call endpoint https://quiet-inlet-67115.herokuapp.com/api/beer/ + id
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

        if (uls.length) {
            document.body.removeChild(uls[0]);
        }

        var div = document.getElementsByTagName('div');

            if (div.length) {
                document.body.removeChild(div[0]);
            }

        if (beers.length) {
            var ul = document.createElement('ul');

            beers.forEach(function (beer) {
                // console.log(beer.id, beer.name);

                var li = document.createElement('li');
                li.innerText = beer.name + ' ' + (beer.id);

                li.addEventListener('click', function () {
                    //mandar borrar
                    retrieveBeer(beer.id, function (info) {
                        var div = document.getElementsByTagName('div');

                        if (div.length) {
                            document.body.removeChild(div[0]);
                        }

                        var div = document.createElement('div');
                        document.body.appendChild(div)
       
                        var h1 = document.createElement('h1');
                        h1.innerText = info.name;
                        div.appendChild(h1);

                        var p = document.createElement('p');
                        p.innerText = info.description;
                        div.appendChild(p);

                        var img = document.createElement('img');
                        if(beer.labels) img.src = info.labels.medium;                 
                        div.appendChild(img);
                        
                        console.log(info);
                    });
                });

                // TODO on click on beer do retrieve beer and show beer below

                ul.appendChild(li);
            });

            document.body.appendChild(ul);

        } else alert('no results');

    });

});

