
var form = document.getElementById('search-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.getElementById('search-query');
    var query = input.value;
    
    logic.search(query, view.listBeer.bind(view))
});

