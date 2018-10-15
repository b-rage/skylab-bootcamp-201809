var turtle = new Animal('turtle.png');

document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 39: //right
            turtle.move(10, 0);
            turtle.checkPosition();
            break;

        case 37: // left
            turtle.move(-10, 0);
            turtle.checkPosition();

            break;
        case 38: // up 
            turtle.jump(10);
            turtle.checkPosition();

            break;
        case 40: // down 
            turtle.move(0, 10);
            turtle.checkPosition();


            break;

        case 32: // (space) turn 
            turtle.rotate(10);
            turtle.checkPosition();


            break;
    }
});

