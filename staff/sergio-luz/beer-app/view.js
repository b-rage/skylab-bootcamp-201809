var view = {
    listBeers: function (beers) {
        this.clearList();

        this.clearDetail();

        if (beers.length) {
            var ul = document.createElement('ul');

            beers.forEach(function (beer) {
                var li = document.createElement('li');

                var a = document.createElement('a');

                a.href = '#';
                a.innerText = beer.name;

                a.addEventListener('click', function () {
                    logic.retrieveBeer(beer.id)
                        .then(this.showBeer.bind(this))
                        .catch(this.showBeer.bind(this))
                }.bind(this));

                li.appendChild(a);

                ul.appendChild(li);
            }.bind(this));

            document.body.appendChild(ul);
        } else alert('no results');
    },
    clearList: function () {
        var uls = document.getElementsByTagName('ul');

        if (uls.length) {
            document.body.removeChild(uls[0]);
        }
    },
    showBeer: function (beer) {
        this.clearDetail();

        var section = document.createElement('section');

        var h2 = document.createElement('h2');

        h2.innerText = beer.name;

        section.appendChild(h2);

        var label = document.createElement('img');

        label.src = beer.labels ? beer.labels.medium : 'https://visualpharm.com/assets/797/Beer-595b40b65ba036ed117d2949.svg';
        label.style.width = '300px';

        section.appendChild(label);

        var desc = document.createElement('p');

        desc.innerText = beer.description || beer.style.description || 'no description';

        section.appendChild(desc);

        document.body.appendChild(section);
    },

    clearDetail: function () {
        var section = document.getElementsByTagName('section');

        if (section.length) {
            document.body.removeChild(section[0]);
        }
    }
}