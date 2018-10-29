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

        var details = document.getElementsByTagName('section');
            if(details.length){
                document.body.removeChild(details[0]);  
            }

        if (beers.length) {
            var ul = document.createElement('ul');

            beers.forEach(function (beer) {

                var li = document.createElement('li');
                
                ul.appendChild(li);

                var a = document.createElement('a');
                a.href = '#';
                a.innerText = beer.name + ' ' + (beer.id);
                var id = beer.id;

                li.appendChild(a);

                a.addEventListener('click', function(event){
                    event.preventDefault();
                    var details = document.getElementsByTagName('section');
                    if(details.length){
                        document.body.removeChild(details[0]);  
                    }
                    details = document.createElement('section');
                    logic.retrieveBeer(id, function(beerDetails){   
                        var h1 = document.createElement('h1');
                        h1.innerText = beerDetails.name;
                        details.appendChild(h1);

                        var img = document.createElement('img');  
                        img.src = beerDetails.labels? beerDetails.labels.medium: 'https://dummyimage.com/200x75/000/fff';
                        //if(beerDetails.labels) img.src = beerDetails.labels.icon;
                        //else img.src = 'https://dummyimage.com/200x75/000/fff';
                        details.appendChild(img);

                        var p = document.createElement('p');
                        p.innerText = beerDetails.description || beerDetails.style.description || 'No beer description';
                        //if(beerDetails.description) p.innerText = beerDetails.description;
                        //else p.innerText = 'No beer description';
                        details.appendChild(p);
        
                        document.body.appendChild(details);
                    });
                });
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});