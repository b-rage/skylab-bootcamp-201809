function viewHeader(_component){

    var self = this;

    this.component = _component;

    this.render = () => {

        var div = $("<div/>");
        div.addClass("header__logo");
        
        var img = $("<img/>");
        img.attr("src", "./assets/img/logo.png");
              
        div.append(img); 
        this.component.element.append(div);
        this.component.element.addClass("header");
        this.component.parentElement.append(this.component.element);
        
    }
}