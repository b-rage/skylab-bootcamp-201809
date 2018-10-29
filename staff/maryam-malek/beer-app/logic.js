var logic = {
    call: function (path, defaultValueOnError) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText);

                resolve(res);
            });

            xhr.addEventListener('error', function () {
                reject(defaultValueOnError);
            });

            xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api' + path);

            xhr.send();
        })
    },

    search: function (query) {
        if (typeof query !== 'string') throw TypeError(query + ' is not a string');

        if (!query.trim().length) throw Error('query is empty or blank');

        return this.call('/search/all?q=' + query, []);
    },

    retrieveBeer: function (id) {
        if (typeof id !== 'string') throw TypeError(id + ' is not a string');

        if (!id.trim().length) throw Error('id is empty or blank');

        return this.call('/beer/' + id);
    }
};
