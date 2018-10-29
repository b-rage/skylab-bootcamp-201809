function rightComponent(tag, parentElement){
    
    Component.call(this, tag, parentElement, new viewRight(this));
    this.viewEngine.render();
    
}

rightComponent.prototype = Object.create(Component.prototype);
rightComponent.prototype.constructor = rightComponent;