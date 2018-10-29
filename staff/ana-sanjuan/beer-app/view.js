var view = {

    listBeer: function (beers) {

        this.clearList();
        this.clearDetails();

        var self = this
        if (beers.length) {
            var ul = document.createElement('ul');
            beers.forEach(function (beer) {

                var li = document.createElement('li');
                var a = document.createElement('a');
                a.innerText = beer.name;
                a.href = '#';
                a.addEventListener('click', 
                    function(event) {
                        event.preventDefault();
                        logic.retrieveBeer (beer.id, self.showDetails.bind(self))
                    }
                )
                li.appendChild(a)
                ul.appendChild(li);
            });

            document.body.appendChild(ul);
            
        } else alert('no results');
    },
    
    clearDetails: function() {
        var beerDetails = document.getElementsByTagName('section');
        if (beerDetails.length) document.body.removeChild(beerDetails[0]);

    },
    clearList: function(){
        var uls = document.getElementsByTagName('ul');
        if (uls.length) document.body.removeChild(uls[0]);
    },
    
    showDetails: function(res){
       
        this.clearDetails();

        var section = document.createElement('section');

        var title = document.createElement('h3');
        title.innerText = res.name;
        section.appendChild(title);
        
        var description = document.createElement('p');
        description.innerText = res.description || res.style.description || 'No description available';
        section.appendChild(description);
        
        var image = document.createElement('img')
        image.src = (res.labels? res.labels.medium: 'https://placekitten.com/300/200');
        image.style.width = '300px'
        section.appendChild(image);

        document.body.appendChild(section);

    }

}