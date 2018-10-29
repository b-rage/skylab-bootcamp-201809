function cubeComponent(tag, parentElement){
    
    Component.call(this, tag, parentElement, new viewCube(this));
    this.viewEngine.render();
    this.back = new backComponent("section", this.element);
    this.front = new frontComponent("section", this.element);
    this.left = new leftComponent("section", this.element);
    this.right = new rightComponent("section", this.element);
    
}

cubeComponent.prototype = Object.create(Component.prototype);
cubeComponent.prototype.constructor = cubeComponent;