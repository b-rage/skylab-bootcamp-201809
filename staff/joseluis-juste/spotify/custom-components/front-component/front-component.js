function frontComponent(tag, parentElement){
    
    Component.call(this, tag, parentElement, new viewFront(this));
    this.viewEngine.render();
    this.header = new headerComponent("header",this.element);
    
}

frontComponent.prototype = Object.create(Component.prototype);
frontComponent.prototype.constructor = frontComponent;