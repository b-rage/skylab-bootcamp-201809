function Component(tag) {
    this.element = $('<' + tag + '/>');
}

function Panel(title, tag) {
    Component.call(this, tag);

    this.element.addClass('panel');

    this.title = $('<h2/>');
    this.title.text(title);
    this.title.addClass('panel__title');

    this.title.appendTo(this.element);
    this.element.appendTo('body');
}

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;

function Dialog(title, text, tag) {
    Panel.call(this, title, tag);

    this.element.addClass('dialog');

    this.title.addClass('dialog__title');


    this.body = $('<p/>');
    this.body.text(text);
    this.body.addClass('dialog__body');

    this.body.appendTo(this.element);
    this.element.appendTo('body');
}

Dialog.prototype = Object.create(Panel.prototype);
Dialog.prototype.constructor = Dialog;

function Alert(title, text, tag, callback, error) {
    Dialog.call(this, title, text, tag);

    this.element.addClass(error ? 'alert alert--danger' : 'alert');

    this.title.addClass('alert__title');

    this.body.addClass('alert__body');
    
    this.accept = $('<button/>');
    this.accept.text('Accept');
    this.accept.addClass('alert__button');
    
    this.accept.on('click', function () {
        this.element.hide();

        callback();
    }.bind(this));

   

    this.element.append(this.accept);
    this.element.appendTo('body');
}

Alert.prototype = Object.create(Dialog.prototype);
Alert.prototype.constructor = Alert;

function Confirm(title, text, tag, acceptCallback, cancelCallback) {
    Dialog.call(this, title, text, tag);

    this.element.addClass('confirm');

    this.title.addClass('confirm__title');

    this.body.addClass('confirm__body');

    this.cancel = $('<button/>');
    this.cancel.text('Cancel');
    this.cancel.addClass('confirm__button');
    
    

    this.cancel.on('click', function () {
        this.element.hide();

        cancelCallback();
    }.bind(this));

    this.element.append(this.cancel);

    this.accept = $('<button/>');
    this.accept.text('Accept');
    this.accept.addClass('confirm__button confirm__button--accept');

    

    this.accept.on('click', function () {
        this.element.hide();

        acceptCallback();
    }.bind(this));

    this.element.append(this.accept);


    this.element.appendTo('body');
}

Confirm.prototype = Object.create(Dialog.prototype);
Confirm.prototype.constructor = Confirm;