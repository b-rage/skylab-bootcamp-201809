var view = {
    listBeers: function (beers) {
        console.log(beers);
        this.clearList();

        this.clearDetail();

        if (beers.length) {
            var ul = document.createElement('ul');
            document.body.appendChild(ul);

            beers.forEach(function (beer) {
                var li = document.createElement('li');
                ul.appendChild(li);

                var a = document.createElement('a');
                li.appendChild(a);

                a.href = '#';
                a.innerText = beer.name;

                a.addEventListener('click', function () {
                    logic.retrieveBeer(beer.id, this.showBeer.bind(this));
                }.bind(this));
            }.bind(this));
        } else alert('no results');
    },

    clearList: function () {
        var uls = document.getElementsByTagName('ul');

        if (uls.length) {
            document.body.removeChild(uls[0]);
        }
    },

    clearDetail: function () {
        var details = document.getElementsByTagName('section');

        if (details.length) {
            document.body.removeChild(details[0]);
        }
    },

    showBeer: function (beer) {
        this.clearDetail();

        var detail = document.createElement('section');
        var h2 = document.createElement('h2');

        h2.innerText = beer.name;

        detail.appendChild(h2);

        var label = document.createElement('img');
        label.src = beer.labels ? beer.labels.medium : 'https://visualpharm.com/assets/797/Beer-595b40b65ba036ed117d2949.svg';
        label.style.widows = '300px'

        detail.appendChild(label);

        var desc = document.createElement('p');

        desc.innerText = beer.description || beer.style.description || 'no description';

        detail.appendChild(desc);

        document.body.appendChild(detail);
    }
}