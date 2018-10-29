function Component(tag) {
    this.element = $('<' + tag + '>' + '</'+ tag + '>');
};


Component.prototype.show = () => {  //ES6 arrow function
    this.element.show() //jquery already has this method
};


Component.prototype.hide = () => {
    this.element.hide(); //jquery already has this method
};


function Panel(title, tag) {
    Component.call(this, tag);

    this.element.addClass("panel");

    this.title = $('<h2></h2>').text(title).addClass('panel__title');
    
    this.element.append(this.title);
};

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;


function Dialog(title, text, tag) {
    Panel.call(this, title, tag);

    this.element.addClass('dialog');

    this.title = $('<h2></h2>').text(title).addClass('dialog__title');

    this.title.appendTo(this.body);

    this.body = $('<p></p>').text(text).addClass('dialog__body');

    this.element.append(this.body);

}

Dialog.prototype = Object.create(Panel.prototype);
Dialog.prototype.constructor = Dialog;


function Alert(title, text, tag, callback, error) {
    Dialog.call(this, title, text, tag);

    this.element.addClass(error ? 'alert alert--danger' : 'alert');

    this.title.addClass('alert__title');

    this.body.addClass('alert__body');

    this.accept = $('<button></button>');
    this.accept.text('Accept');

    this.accept.click(() => {
        this.element.hide();

        callback();
    });

    this.accept.addClass('alert__button');

    this.element.append(this.accept);
}

Alert.prototype = Object.create(Dialog.prototype);
Alert.prototype.constructor = Alert;


function Confirm(title, text, tag, acceptCallback, cancelCallback) {
    Dialog.call(this, title, text, tag);

    this.element.addClass('confirm');

    this.title.addClass('confirm__title');
    
    this.body.addClass('confirm__body');
    

    this.cancel = $('<button></button>').text('Cancel').addClass('confirm__button').click(() => {
        this.element.hide();

        cancelCallback();
    });

    this.cancel.appendTo(this.element);


    this.accept = $('<button></button>').text('Accept').addClass('confirm__button confirm__button--accept').click(() => {
        this.element.hide()

        acceptCallback();
    });

    this.element.append(this.accept);
}

Confirm.prototype = Object.create(Dialog.prototype);
Confirm.prototype.constructor = Confirm;