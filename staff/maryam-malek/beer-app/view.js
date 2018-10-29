var view = {
    clearDetail: function () {
        var details = document.getElementsByTagName('section');
        if (details.length) {
            document.body.removeChild(details[0]);
        }
    },

    clearList: function () {
        var uls = document.getElementsByTagName('ul');
        if (uls.length) {
            document.body.removeChild(uls[0]);
        }
    },

    listBeers: function (beers) {
        this.clearList();

        this.clearDetail();

        if (beers.length) {
            var ul = document.createElement('ul');

            beers.forEach(function (beer) {
                var li = document.createElement('li');

                var a = document.createElement('a');
                a.href = '#';
                a.innerText = beer.name + ' ' + (beer.id);

                ul.appendChild(li);
                li.appendChild(a);

                a.addEventListener('click', function (event) {
                    event.preventDefault();
                    logic.retrieveBeer(beer.id)
                     .then(this.detailBeer.bind(this))
                     .catch(this.detailBeer.bind(this))
                }.bind(this))

            }.bind(this));

            document.body.appendChild(ul);
        } else alert('no results');

    },

    detailBeer: function (beerDetails) {
        this.clearDetail();

        var details = document.createElement('section');

        var h1 = document.createElement('h1');
        h1.innerText = beerDetails.name;
        details.appendChild(h1);

        var img = document.createElement('img');
        img.src = beerDetails.labels ? beerDetails.labels.medium : 'https://dummyimage.com/200x75/000/fff';
        details.appendChild(img);

        var p = document.createElement('p');
        p.innerText = beerDetails.description || beerDetails.style.description || 'No beer description';
        details.appendChild(p);

        document.body.appendChild(details);
    }

};
