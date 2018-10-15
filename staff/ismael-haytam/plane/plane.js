function Plane(image) {
    Component.call(this, 'img');

    this.element.src = image;
    this.element.style.position = 'absolute'
    this.element.style.left = '150px'
    this.element.style.width = '250px';
	this.element.style.bottom = '50px';

    document.body.appendChild(this.element);

    this.step = 10;
    this.rotation = 0;
    this.vx = 0;
	this.vy = -3;
    this.gravity = 0.2;
    
    this.x = 50;
    this.y = 50;
}

Plane.prototype = Object.create(Component.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.applyGravity = function () {
    this.element.style.top = this.y + 'px';    
};

Plane.prototype.calcX = function () {
    return Math.sin(this.rotation * Math.PI / 180) * this.step;
};

Plane.prototype.calcY = function () {
    return Math.cos(this.rotation * Math.PI / 180) * this.step;
};

Plane.prototype.fly = function () {
    requestAnimationFrame(this.fly.bind(this));

    if (this.vy < 2) this.vy += this.gravity;

    this.x += this.vx;
    this.y += this.vy;

    if (this.y < 400) this.element.style.width = (900 - this.y) + 'px';

    this.applyGravity();
}

Plane.prototype.move = function (x, y) {
    this.y = this.element.offsetTop + y; 
    this.x = this.element.offsetLeft + x
    this.element.style.top = this.y + 'px';
    this.element.style.left = this.x + 'px';
};

Plane.prototype.timon = function (x) {
    this.element.style.right = this.element.offsetLeft + x + 'px';
};

Plane.prototype.turn = function (rotation) {
    this.rotation += rotation;

    this.element.style.transform = 'rotate(' + this.rotation + 'deg)';
};

Plane.prototype.turnRight = function () {
    this.turn(this.step);
};

Plane.prototype.turnLeft = function () {
    this.turn(-this.step);
};

Plane.prototype.timonRight = function () {
    this.element.src = './img/timon-right.png';
    this.move(this.step, 0);
};

Plane.prototype.timonLeft = function () {
    this.element.src = './img/timon-left.png';
    this.move(-this.step, 0);
};

Plane.prototype.timonAligned = function () {
    this.element.src = './img/plane.png';
    this.move(-this.step, 0);
};

Plane.prototype.goForward = function () {
    this.vy = -3;
};
