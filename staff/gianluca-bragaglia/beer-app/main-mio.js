function search(query, callback) {
    var xhr = new XMLHttpRequest();

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
    // TODO call endpoint https://quiet-inlet-67115.herokuapp.com/api/beer/ + id
    console.log(id);
    
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

        var details = document.getElementsByTagName('section'); //creo el contenedor details(imagen+titol+description)

        if (details.length) {    // para borrar el detalle(imagen+titol+description) cuando hago una nueva busqueda
            document.body.removeChild(details[0]);
        }

        if (beers.length) {

            var ul = document.createElement('ul');

            beers.forEach(function (beer) {
                // console.log(beer.id, beer.name);

                var li = document.createElement('li');  // creo un li e a para cada item(beer) del jason

                var a = document.createElement('a');

                a.href = '#';
                a.innerText = beer.name;


                a.addEventListener('click', function () {
                    retrieveBeer(beer.id, function (beer) {
                        var details = document.getElementsByTagName('section');

                        if (details.length) {
                            document.body.removeChild(details[0]);
                        }

                        var detail = document.createElement('section');

                        var h2 = document.createElement('h2');

                        h2.innerText = beer.name;

                        detail.appendChild(h2);

                        var label = document.createElement('img');

                        label.src = beer.labels ? beer.labels.medium : 'https://visualpharm.com/assets/797/Beer-595b40b65ba036ed117d2949.svg';
                        label.style.width = '300px';

                        detail.appendChild(label);

                        var desc = document.createElement('p');

                        desc.innerText = beer.description || beer.style.description || 'no description';

                        detail.appendChild(desc);

                        document.body.appendChild(detail);
                    });
                });
                li.appendChild(a);
                ul.appendChild(li);

            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});