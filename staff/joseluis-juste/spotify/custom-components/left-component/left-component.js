function leftComponent(tag, parentElement){
    
    Component.call(this, tag, parentElement, new viewLeft(this));
    this.viewEngine.render();
    
}

leftComponent.prototype = Object.create(Component.prototype);
leftComponent.prototype.constructor = leftComponent;