var form = document.getElementById('search-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var input = document.getElementById('search-query');

    var query = input.value;

    logic.search(query, function (beers) {
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
                li.innerText = beer.name;

                li.addEventListener('click', function () {
                    //mandar borrar
                    logic.retrieveBeer(beer.id, function (info) {
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

