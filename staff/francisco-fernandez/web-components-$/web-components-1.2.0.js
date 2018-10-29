function Component(tag) {
    // this.element = document.createElement(tag);
    // $(this.element)("<"+tag+">"+"</"+tag+">");
    // this.element=$(document).add("<"+tag+">"+"</"+tag+">");
    this.element = $("<"+tag+">"+"</"+tag+">");

}

Component.prototype.show = function () {
    this.element.css('display', 'block');
};

Component.prototype.hide = function () {
    this.element.css('display', 'none');
};

function Panel(title, tag) {
    Component.call(this, tag);

    // this.element.className = 'panel';
    $(this.element).addClass('panel');

    this.title = $('<h2>title</h2>');
    // $(this.title).add('<h2></h2>');

    // this.title.innerText = title;
    $(this.title).text(title);
    // this.title.className = 'panel__title'
    $(this.title).addClass('panel__title');

    // this.element.appendChild(this.title);
    $(this.element).append(this.title);
}

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;

function Dialog(title, text, tag) {
    Panel.call(this, title, tag);

    // this.element.className = 'dialog';
    $(this.element).addClass('dialog');

    // this.title.className = 'dialog__title';
    $(this.title).addClass('dialog__title');

    // this.body = document.createElement('p');
    this.body = $('<p></p>');
    // this.body.innerText = text;
    $(this.body).text(text);
    // this.body.className = 'dialog__body';
    $(this.body).addClass('dialog__body');

    // this.element.appendChild(this.body);
    $(this.body).appendTo(this.element);
}

Dialog.prototype = Object.create(Panel.prototype);
Dialog.prototype.constructor = Dialog;

function Alert(title, text, tag, callback, error) {
    Dialog.call(this, title, text, tag);

    // this.element.className = error ? 'alert alert--danger' : 'alert';
    $(this.element).addClass(error ? 'alert alert--danger' : 'alert');
    // this.title.className = 'alert__title';
    $(this.title).addClass('alert__title');

    // this.body.className = 'alert__body';
    $(this.body).addClass('alert__body');

    // this.accept = document.createElement('button');
    this.accept = $('<button></button>');
    // this.accept.innerText = 'Accept';
    $(this.accept).text('Accept');

    // var self = this;

    // this.accept.addEventListener('click', function(event) {
    //     self.element.style.display = 'none';
    // });

    // this.accept.addEventListener('click', function () {
        // this.element.style.display = 'none';
        this.accept.click(function () {
            this.element.css('display', 'none');

        callback();
    }.bind(this));

    // this.accept.className = 'alert__button';
    $(this.accept).addClass('alert__button');

    // this.element.appendChild(this.accept);
    $(this.accept).appendTo(this.element);
}

Alert.prototype = Object.create(Dialog.prototype);
Alert.prototype.constructor = Alert;

function Confirm(title, text, tag, acceptCallback, cancelCallback) {
    Dialog.call(this, title, text, tag);

    // this.element.className = 'confirm';
    $(this.element).addClass('confirm');
    // this.title.className = 'confirm__title';
    $(this.title).addClass('confirm__title');
    // this.body.className = 'confirm__body';
    $(this.body).addClass('confirm__body');
    // this.cancel = document.createElement('button');
    this.cancel = $('<button></button>');
    $(this.cancel).text('Cancel');
    // this.cancel.className = 'confirm__button';
    $(this.cancel).addClass('confirm__button');
    // this.cancel.addEventListener('click', function () {
        // this.element.style.display = 'none';
this.cancel.click(function () {
        this.element.css('display', 'none');

        cancelCallback();
    }.bind(this));

    // this.element.appendChild(this.cancel);
    $(this.element).append(this.cancel);
    

    // this.accept = document.createElement('button');
    // this.accept.innerText = 'Accept';
    // this.accept.className = 'confirm__button confirm__button--accept';

    // this.accept.addEventListener('click', function () {
    //     this.element.style.display = 'none';

    //     acceptCallback();
    // }.bind(this));

    // // this.element.appendChild(this.accept);
    // $(this.element).append(this.accept);
    this.accept = $('<button></button>');
    $(this.accept).text('Accept');
    $(this.accept).addClass('confirm__button confirm__button--accept');

    this.accept.click(function () {
        this.element.css('display', 'none');

        acceptCallback();
    }.bind(this));

    this.accept.appendTo(this.element);

}

Confirm.prototype = Object.create(Dialog.prototype);
Confirm.prototype.constructor = Confirm;