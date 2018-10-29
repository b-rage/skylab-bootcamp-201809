function viewBack(_component){

    var self = this;

    this.component = _component;

    this.render = () => {

         this.component.parentElement.append(this.component.element);
         this.component.element.addClass("back");
    }
}