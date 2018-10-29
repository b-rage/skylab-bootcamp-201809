function headerComponent(tag, parentElement){
    
    Component.call(this, tag, parentElement, new viewHeader(this));
    this.viewEngine.render();
    
}

headerComponent.prototype = Object.create(Component.prototype);
headerComponent.prototype.constructor = headerComponent;