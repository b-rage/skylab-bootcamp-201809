var form = document.getElementById('search-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var input = document.getElementById('search-query');

    var query = input.value;

    logic.search(query, listBeers);
});

function listBeers(beers) {
    clearList();

    clearDetail();

    if (beers.length) {
        var ul = document.createElement('ul');

        beers.forEach(function (beer) {
            var li = document.createElement('li');

            var a = document.createElement('a');

            a.href = '#';
            a.innerText = beer.name;

            a.addEventListener('click', function () {
                logic.retrieveBeer(beer.id, showBeer);
            });

            li.appendChild(a);

            ul.appendChild(li);
        });

        document.body.appendChild(ul);
    } else alert('no results');
}

function clearList() {
    var uls = document.getElementsByTagName('ul');

    if (uls.length) {
        document.body.removeChild(uls[0]);
    }
}

function showBeer(beer) {
    clearDetail();

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
}

function clearDetail() {
    var details = document.getElementsByTagName('section');

    if (details.length) {
        document.body.removeChild(details[0]);
    }
}