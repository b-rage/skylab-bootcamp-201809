function ListComponent(title, tag) {
    Panel.call(this, title, tag);

    var self = this;

    this.viewEngine = new viewListComponent(this);
    
    this.viewEngine.render($("#wrap").first());

    this.setList = function(beers){

        self.viewEngine.paintList(beers);
    }

    this.getDetails = function(id){

        var service = new ServiceFactory();
        service.getDetail(id, function (resp) {

            if (resp instanceof Error) throw resp;

            self.viewEngine.drawDetails(resp);
        });

    }

    this.deleteSearch = function(){

        this.viewEngine.deleteSearch();

    }
}

ListComponent.prototype = Object.create(Panel.prototype);
ListComponent.prototype.constructor = ListComponent;