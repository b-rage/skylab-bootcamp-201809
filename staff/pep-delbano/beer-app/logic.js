var logic = {
    call: function(path, callback, defaultValueOnError) {
        var xhr = new XMLHttpRequest(); // XMLHttpRequest is a constructor object, that can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page. The object must be prepared by at least calling open() to initialize it before calling send() to send the request to the server
    
        xhr.addEventListener("load", function () {  //we can add events to the request: when it loads, get the json info and with the function 'callback' we process that info and put it in the list items ()
            var res = JSON.parse(xhr.responseText);
    
            callback(res);
        });
    
        xhr.addEventListener("error", function () {
            callback(defaultValueOnError);
        });
    
        xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api' + path);  //xhr.open mehtod initializes (if used when a request is already open, it aborts the request!); the two parameters here are: method GET, the URL where to send the request to;
    
        xhr.send();
    },

    search: function(query, callback) {

        if(typeof query !== 'string') throw TypeError(query + ' is not a string');

        if(!query.trim()).length) throw Error('query is empty or blank');

        if(typeof callback !== 'function') throw TypeError(callback + ' is not a function')
        
        this.call('/search/all?q=' + query, callback, []);
    },
    
    retrieveBeer: function(id, callback) { // we call it in the view.js, in the callback of the eventlistener when clicking the link of the beer, it's called like this: logic.retrieveBeer(beer.id, self.showBeer.bind(self)), so the callback 
        this.call('/beer/' + id, callback);
    }
};