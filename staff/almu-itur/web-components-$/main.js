var panel = new Panel('hola mundo', 'section');

//document.body.appendChild(panel.element);
panel.element.appendTo('body');


var dialog = new Dialog('hola mundo', 'lorem ipsum ...', 'section');

//document.body.appendChild(dialog.element);
dialog.element.appendTo('body');

var alert = new Alert('Achtung!', 'Schade! ...', 'section', function() {
    console.log('Achtung accepted');
});

//document.body.appendChild(alert.element);
alert.element.appendTo('body');

var error = new Alert('Error!', 'Schade! ...', 'section', function() {
    console.log('Error accepted');
}, true);

//document.body.appendChild(error.element);
error.element.appendTo('body');

var confirm = new Confirm('Do you want to proceed?', 'Please, review the contract before accepting...', 'section', function() {
    console.log('confirm accepted');
}, function() {
    console.log('confirm denied');
});

//document.body.appendChild(confirm.element);
confirm.element.appendTo('body');
