var logic = {

    call: function(path, callback, defaultValueonError) {
        var xhr = new XMLHttpRequest();
    
        xhr.addEventListener("load", function () {
            var res = JSON.parse(xhr.responseText);
            callback(res);
        });
    
        xhr.addEventListener("error", function () {
            callback(defaultValueonError);
        });
    
        xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api' + path);
    
        xhr.send();
    },
    search: function(query, callback) {
        if (typeof query !== 'string') throw TypeError(query + ' is not a string');

        if (!query.trim().length) throw Error('query is empty or blank');
        this.call('/search/all?q=' + query, callback, []);
    },
    
    
    retrieveBeer: function(id, callback) {
        if (typeof id !== 'string') throw TypeError(id + ' is not a string');

        if (!id.trim().length) throw Error('id is empty or blank');
        this.call('/beer/' + id, callback);
    }
}
