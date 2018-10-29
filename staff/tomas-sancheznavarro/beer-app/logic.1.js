var logic = {
    search: function (query, callback) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
            var res = JSON.parse(xhr.responseText);

            callback(res);
        });

        xhr.addEventListener("error", function () {
            callback([]);
        });

        xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query);

        xhr.send();
    },

    retrieveBeer: function (id, callback) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
            var res = JSON.parse(xhr.responseText);

            callback(res);
        });

        xhr.addEventListener("error", function () {
            callback();
        });

        xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id);

        xhr.send();
    }
};