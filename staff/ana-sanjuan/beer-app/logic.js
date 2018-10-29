
var logic = {
    http: function (url, callback, errorParam) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function() {
            var res = JSON.parse(xhr.responseText);

            callback(res);
        });
        xhr.addEventListener("error", function() {
            callback(errorParam);
        });
        // xhr.addEventListener("abort", transferCanceled);
        xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api' + url);
        xhr.send();
    },

    search: function (query, callback) {
        this.http('/search/all?q=' + query, callback, []);
    },

    retrieveBeer: function(id, callback) {
        this.http('/beer/'+ id, callback);
    }

}


