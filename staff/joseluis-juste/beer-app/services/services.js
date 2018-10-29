function ServiceFactory() {

    return {

        call: function (url, method, callback) {


            var xhr = new XMLHttpRequest();

            xhr.addEventListener("load", function () {
                var resp = JSON.parse(xhr.responseText);
                callback(resp);
            });

            xhr.addEventListener("error", function () {
                callback(new Error("The request has failed"));
            });

            xhr.open(method, url);

            xhr.send();


        },

        getList: function (query, callback) {

            if (!query && query !=="") throw Error(query + " is not a valid input value");

            if (typeof query !== "string" || query.trim().length === 0) throw Error("empty input value is not allowed");

           
            this.call('https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query, 'get', function (resp) {

                callback(resp);

            });


        },

        getDetail: function (id, callback) {


            this.call('https://quiet-inlet-67115.herokuapp.com/api/beer/' + id, 'get', function (resp) {

                var url;

                if (resp instanceof Error) {

                    callback(resp);
                    return;
                }

                if (resp.labels)

                    url = resp.labels.medium;

                else

                    url = 'https://even3.blob.core.windows.net/logos/canecachoppdelivery.fe0135fdb58c4241b279.png';

                var resp = {

                    desc: resp.description,
                    url: url,
                    title: resp.name

                };
                callback(resp);
            });




        }
    };
}