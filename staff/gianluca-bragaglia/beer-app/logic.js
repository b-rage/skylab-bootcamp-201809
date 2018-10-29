var logic = {
    call: function (path, callback, defaultValueOnError) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
            var res = JSON.parse(xhr.responseText);

            callback(res);
        });

        xhr.addEventListener("error", function () {
            callback(defaultValueOnError);
        });

        xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api' + path);

        xhr.send();
    },

    search: function (query, callback) {
        if (typeof query !== 'string') throw TypeError(query + ' is not a string');

        if (!query.trim().length) throw Error('query is empty or blank');

        if (typeof callback !== 'function') throw TypeError(callback + ' is not a function');

        this.call('/search/all?q=' + query, callback, []);
    },

    retrieveBeer: function (id, callback) {
        this.call('/beer/' + id, callback);
    }
};