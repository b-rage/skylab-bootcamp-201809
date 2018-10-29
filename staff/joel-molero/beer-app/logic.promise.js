var logic = {
    call: function(path, defaultValueOnError) {
        return new Promise((resolve, reject) => {

        
        var xhr = new XMLHttpRequest();
    
        xhr.addEventListener("load", function () {
            var res = JSON.parse(xhr.responseText);
    
            resolve(res);
        });
    
        xhr.addEventListener("error", function () {
            reject(defaultValueOnError);
        });
    
        xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api' + path);
    
        xhr.send();
    })
    },

    search: function(query) {
        return this.call('/search/all?q=' + query, []);
    },
    
    retrieveBeer: function(id) {
        return this.call('/beer/' + id);
    }
};