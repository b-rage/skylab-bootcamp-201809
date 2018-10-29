function viewCube(_component){

    var self = this;

    this.component = _component;

    this.render = () => {

         this.component.parentElement.append(this.component.element);
         this.component.element.attr("id", "cube");
         this.component.element.append($('<section class="top"></section>'));
         this.component.element.append($('<section class="bottom"></section>'));
    }
}