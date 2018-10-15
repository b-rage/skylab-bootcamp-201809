function Component(tag){
    this.element = document.createElement(tag);
};


function Animal(img){
    Component.call(this, 'img');
    
    this.element.src = img;
    this.element.style.position = 'absolute'
    this.element.style.height = '80px';
    this.element.style.top = '208px';

    document.body.appendChild(this.element);

    this.step = 10;
    this.angle = 0;

}
Animal.prototype = Object.create(Component.prototype);
Animal.prototype.constructor = Animal;

Animal.prototype.move = function(x, y){
    this.element.style.top = this.element.offsetTop + y + 'px';
    this.element.style.left = this.element.offsetLeft + x + 'px';

};

Animal.prototype.rotate = function(angle){
    this.angle += angle;
    this.element.style.transform = 'rotate(' + this.angle + 'deg)';

};

Animal.prototype.jump = function(strength){
    this.element.style.top = (this.element.offsetTop - strength) + 'px';
    this.element.style.left = this.element.offsetLeft + 10 + 'px';
    // this.element.style.top = (this.element.offsetTop + strength) + 'px';

};

Animal.prototype.checkPosition = function(){
    if(this.element.offsetLeft === 408 && this.element.offsetTop === 218){
        alert('You crashed!!!!');
    }
}