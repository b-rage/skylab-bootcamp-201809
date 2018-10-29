var view = {

    clearList: function () {
        var uls = document.getElementsByTagName('ul');

        if (uls.length) {
            document.body.removeChild(uls[0]);
        };
    },

    clearDetails: function () {
        var details = document.getElementsByTagName('section');

        if (details.length) {
            document.body.removeChild(details[0]);
        };
    },
    
    listBeers: function (beers) {
        this.clearList();
        this.clearDetails();

        if (beers.length) {
            var ul = document.createElement('ul');

            var self = this;

            beers.forEach(function (beer) {
                // console.log(beer.id, beer.name);
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
            
    showBeer: function (beer) {
        this.clearDetails();

        var detail = document.createElement('section');

        var h3 = document.createElement('h3');
        h3.innerText = beer.name;
        detail.appendChild(h3);

        var pic = document.createElement('img');
        pic.src = (beer.labels) ? beer.labels.medium : 'https://i.pinimg.com/originals/6a/e8/a7/6ae8a729773b78fc3c94d451d8ccde36.jpg' ;
        pic.width = 250
        detail.appendChild(pic);

        var p = document.createElement('p');
        p.innerText = beer.style.description ||beer.description || beer.style.description || 'no description';
        detail.appendChild(p);

        document.body.appendChild(detail);
    }     
};
