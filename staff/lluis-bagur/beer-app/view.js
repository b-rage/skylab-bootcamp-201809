var view = {
    listBeers: function (beers) {
        this.clearList();

        this.clearDetail();

        if (beers.length) {
            var ul = document.createElement('ul');

            // beers.forEach(function (beer) {
            //     var li = document.createElement('li');

            //     var a = document.createElement('a');

            //     a.href = '#';
            //     a.innerText = beer.name;

            //     a.addEventListener('click', function () {
            //         logic.retrieveBeer(beer.id, this.showBeer.bind(this));
            //     }.bind(this));

            //     li.appendChild(a);

            //     ul.appendChild(li);
            // }.bind(this));

            var self = this;

            beers.forEach(function (beer) {
                var li = document.createElement('li');

                var a = document.createElement('a');

                a.href = '#';
                a.innerText = beer.name;

                a.addEventListener('click', function () {
                    logic.retrieveBeer(beer.id, self.showBeer.bind(self));
                });

                li.appendChild(a);

                ul.appendChild(li);
            });

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
    },

    clearDetail: function () {
        var details = document.getElementsByTagName('section');

        if (details.length) {
            document.body.removeChild(details[0]);
        }
    }
}