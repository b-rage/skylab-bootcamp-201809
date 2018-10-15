var a320 = new Plane('./img/plane.png');

a320.fly();

document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 39: // right
			a320.timonRight();
            a320.turnRight();

            break;
        case 37: // left
			a320.timonLeft();
            a320.turnLeft();

            break;
        case 38: // 38: // up (go forward "palante")
            a320.goForward();
            break;
			
		case 65: 
            a320.timonLeft();
            break

        case 68:        
            a320.timonRight();
			break
    }
});

document.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
        case 68:
        case 39:
        case 38:
		case 65: 
            a320.timonAligned();
            break
    }
});
