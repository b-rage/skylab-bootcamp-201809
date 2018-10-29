function viewSearchComponent(searchComponent) {

    var self = this;
    this.searchComponent = searchComponent;
    this.main_element = this.searchComponent.element;
    
    this.render = function (parentElement) {
        
        var button = $('<button/>');
        button.attr("type", "button");
        button.text("Search");
        button.on("click", function(ev){
    
            self.searchComponent.getList($('#search').val());
        });     
        
        var button_delete = $('<button/>');
        button_delete.attr("type", "button");
        button_delete.text("Delete Seach");
        button_delete.on("click", function(ev){
    
            self.searchComponent.deleteSearch();
        });

        this.input = $('<input/>');
        this.input.attr("type","text");
        this.input.attr("name","search");
        this.input.attr("placeholder","search...");
        this.input.attr("id", "search");

        var groupfield = $("<div/>");
        groupfield.addClass("panel__form-search__groupfield");
        groupfield.append(this.input);
        
      
           
        this.form = $('<form/>');
        this.form.addClass("panel__form-search");
        this.form.on("submit", e => e.preventDefault());
        this.form.append(groupfield);
        this.form.append(button);
        this.form.append(button_delete);
        
        this.main_element.append(this.form);
        parentElement.append(this.main_element);
    }

    this.resetForm = function(){
        this.form[0].reset();
        this.input[0].focus();
    }
}

