var form = document.getElementById('search-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var input = document.getElementById('search-query');

    var query = input.value;

    logic.search(query, function (beers) {
        var uls = document.getElementsByTagName('ul');
        var section = document.getElementsByTagName('section');

        if (uls.length) {
            document.body.removeChild(uls[0]);
        }

        if(section.length){
            document.body.removeChild(section[0]);
        }

        if (beers.length) {
            var ul = document.createElement('ul');
            //var section = document.getElementsByTagName('section');

            beers.forEach(function (beer) {
                // console.log(beer.id, beer.name);

                var li = document.createElement('li');

                var a = document.createElement('a');
                a.innerText = beer.name + ' ' + (beer.id);
                a.className = 'beer' + beer.id;
                a.href = "#";

                // TODO on click on beer do retrieve beer and show beer below

                li.appendChild(a);

                ul.appendChild(li);

                a.addEventListener('click', function (event) {
                    event.preventDefault();

                    logic.retrieveBeer(beer.id, function (res) {

                        section = document.getElementsByTagName('section');

                        if (section.length) {
                            document.body.removeChild(section[0]);
                        }

                        if (res) {

                            section = document.createElement('section');
                            var h1 = document.createElement('h1');
                            var p = document.createElement('p');
                            var img = document.createElement('img');
                            h1.innerText = res.name;
                            // p.innerText = res.description;
                            img.id = beer.id;
                            // img.src = res.labels.medium;

                            (res.description !== undefined) ? (p.innerText = res.description) : (p.innerText = 'No description');
                            (res.labels !== undefined) ? (img.src = res.labels.medium) : (img.src = "https://dummyimage.com/200x100/000/fff");

                            document.body.appendChild(section);
                            section.appendChild(h1);
                            section.appendChild(img);
                            section.appendChild(p);
                        }
                    });
                });
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });

});