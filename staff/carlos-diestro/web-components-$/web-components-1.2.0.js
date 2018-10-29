function Component(tag) {
    this.element = $('<' + tag + '></' + tag + '>');
}

Component.prototype.show = function () {
    this.element.css('display', 'block');
};

Component.prototype.hide = function () {
    this.element.css('display', 'none');
};

function Panel(title, tag) {
    Component.call(this, tag);

    this.element.addClass('panel');

    this.title = $('<h2></h2');
    this.title.append(title);
    this.title.addClass('panel__title');
    this.title.appendTo(this.element);
}

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;

function Dialog(title, text, tag) {
    Panel.call(this, title, tag);

    this.element.addClass('dialog');

    this.title.addClass('dialog__title');

    this.body = $('<p></p>');
    this.body.append(text);
    this.body.addClass('dialog__body');
    this.body.appendTo(this.element);
}

Dialog.prototype = Object.create(Panel.prototype);
Dialog.prototype.constructor = Dialog;

function Alert(title, text, tag, callback, error) {
    Dialog.call(this, title, text, tag);

    var className = (error ? 'alert alert--danger' : 'alert');

    this.element.addClass((error ? 'alert alert--danger' : 'alert'));

    this.title.addClass('alert__title');

    this.body.addClass('alert__body');

    this.accept = $('<button></button>');
    this.accept.append('Accept');

    // var self = this;

    // this.accept.addEventListener('click', function(event) {
    //     self.element.style.display = 'none';
    // });

    this.accept.on('click', function () {
        this.element.css('display', 'none');

        callback();
    }.bind(this));

    this.accept.addClass('alert__button');

    this.accept.appendTo(this.element);
}

Alert.prototype = Object.create(Dialog.prototype);
Alert.prototype.constructor = Alert;

function Confirm(title, text, tag, acceptCallback, cancelCallback) {
    Dialog.call(this, title, text, tag);

    this.element.addClass('confirm');

    this.title.addClass('confirm__title');

    this.body.addClass('confirm__body');

    this.cancel = $('<button></button>');
    this.cancel.append('Cancel');
    this.cancel.addClass('confirm__button');

    this.cancel.on('click', function () {
        this.element.css('display', 'none');

        cancelCallback();
    }.bind(this));

    this.cancel.appendTo(this.element);

    this.accept = $('<button></button>');
    this.accept.append('Accept');
    this.accept.addClass('confirm__button confirm__button--accept');

    this.accept.on('click', function () {
        this.element.css('display', 'none');

        acceptCallback();
    }.bind(this));

    this.accept.appendTo(this.element);
}

Confirm.prototype = Object.create(Dialog.prototype);
Confirm.prototype.constructor = Confirm;