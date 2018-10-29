function Component(tag) {
    this.element = document.createElement(tag);
}

Component.prototype.show = function () {
    this.element.style.display = 'flex';
};

Component.prototype.hide = function () {
    this.element.style.display = 'none';
};

function Panel(title, tag) {
    Component.call(this, tag);
    this.element.className = 'panel';

    this.title = document.createElement('h2');
    this.title.innerText = title;
    this.title.className = 'panel__title';

    this.element.appendChild(this.title);
}

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;

function Dialog(title, text, tag) {
    Panel.call(this, title, tag);

    this.element.className = 'dialog';

    this.title.className = 'dialog__title';

    this.body = document.createElement('p');
    this.body.innerText = text;
    this.body.className = 'dialog__body';

    this.element.appendChild(this.body);
}

Dialog.prototype = Object.create(Panel.prototype);
Dialog.prototype.constructor = Dialog;

function Alert(title, text, tag, callback, error) {
    Dialog.call(this, title, text, tag);

    this.element.className = error ? 'alert alert--danger' : 'alert';

    this.title.className = 'alert__title';

    this.body.className = 'alert__body';

    this.accept = document.createElement('button');
    this.accept.innerText = 'Accept';

    // var self = this;

    // this.accept.addEventListener('click', function(event) {
    //     self.element.style.display = 'none';
    // });

    this.accept.addEventListener('click', function () {
        this.element.style.display = 'none';

        callback();
    }.bind(this));

    this.accept.className = 'alert__button';

    this.element.appendChild(this.accept);
}

Alert.prototype = Object.create(Dialog.prototype);
Alert.prototype.constructor = Alert;

function Confirm(title, text, tag, acceptCallback, cancelCallback) {
    Dialog.call(this, title, text, tag);

    this.element.className = 'confirm';

    this.title.className = 'confirm__title';

    this.body.className = 'confirm__body';

    this.cancel = document.createElement('button');
    this.cancel.innerText = 'Cancel';
    this.cancel.className = 'confirm__button';

    this.cancel.addEventListener('click', function () {
        this.element.style.display = 'none';

        cancelCallback();
    }.bind(this));

    this.element.appendChild(this.cancel);

    this.accept = document.createElement('button');
    this.accept.innerText = 'Accept';
    this.accept.className = 'confirm__button confirm__button--accept';

    this.accept.addEventListener('click', function () {
        this.element.style.display = 'none';

        acceptCallback();
    }.bind(this));

    this.element.appendChild(this.accept);
}

Confirm.prototype = Object.create(Dialog.prototype);
Confirm.prototype.constructor = Confirm;

function Form(id, elements) {
    this.form = document.createElement('form');
    if (id) this.form.id = id;
    this.form.className = 'form';

    function formatLabel(label) {
        var words = label.split('_');
        words.forEach(function(word, i) {
            words[i] = word.charAt(0).toUpperCase() + word.slice(1);
        });
        return words.join(' ');
    }

    var that = this;
    elements.forEach(function(element) {
        switch (element.element) {
            case 'input':
                that.group = document.createElement('div');
                that.group.className = 'form__group';

                that.label = document.createElement('label');
                if (element.id) that.label.for = element.id;
                that.label.className = element.class ? element.class : 'form-group__label';
                that.label.innerText = element.label ? element.label : formatLabel(element.id);
                that.group.appendChild(that.label);

                that.input = document.createElement('input');
                if (element.id) that.input.id = element.id;
                that.input.className = element.class ? element.class : 'form-group__input';
                that.input.type = element.type ? element.type : 'text';
                that.group.appendChild(that.input);

                that.form.appendChild(that.group);
                break;
            case 'button':
                if (typeof that.buttons === 'undefined') {
                    that.buttons = document.createElement('div');
                    that.buttons.className = 'form__buttons'
                    that.form.appendChild(that.buttons);
                }

                that.button = document.createElement('button');
                that.button.type = element.type ? element.type : 'button';
                if (element.label) that.button.innerText = element.label;
                that.button.className = element.class ? element.class : 'form-buttons__button';
                for (var listener in element.on) that.button.addEventListener(listener, element.on[listener]);
                that.buttons.appendChild(that.button);
                break;
        }
    });

    return this.form;
}
