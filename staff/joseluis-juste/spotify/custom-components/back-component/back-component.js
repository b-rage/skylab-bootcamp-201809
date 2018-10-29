function backComponent(tag, parentElement){
    
    Component.call(this, tag, parentElement, new viewBack(this));
    this.viewEngine.render();
    
}

backComponent.prototype = Object.create(Component.prototype);
backComponent.prototype.constructor = backComponent;