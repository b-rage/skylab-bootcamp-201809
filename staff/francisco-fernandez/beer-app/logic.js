var logic={
    call: function(path, callback, defaultValueOnError) {
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

    search: function(query, callback) {
        this.call('/search/all?q=' + query, callback, []);
    },
    
    retrieveBeer: function(id, callback) {
        this.call('/beer/' + id, callback);
    }
};