
function Component(tag) {
    this.element = $('<' +tag+ '>'+'</ '+ tag +'>');
}   

Component.prototype.show = function () {
    //this.element.style.display = 'block';
    this.element.css('display','block');
};

Component.prototype.hide = function () {
    //this.element.style.display = 'none';
    this.element.css('display','none');
};

function Panel(title, tag) {
    Component.call(this, tag);

    this.element.addClass('panel');

    this.title=$('<h2>title</h2>').text(title).addClass('panel__title');
   
    this.title.appendTo(this.element);
}

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;

function Dialog(title, text, tag) {
    Panel.call(this, title, tag);

    this.element.addClass('dialog')
    //this.element.className = 'dialog';
    this.title.addClass('dialog__title');
    //this.title.className = 'dialog__title';
    

    this.body= $('<p></p>').text(text).addClass('dialog__body')

    /*
    this.body = document.createElement('p');
    this.body.innerText = text;
    this.body.className = 'dialog__body';
    */
   this.body.appendTo(this.element);
}

Dialog.prototype = Object.create(Panel.prototype);
Dialog.prototype.constructor = Dialog;

function Alert(title, text, tag, callback, error) {
    Dialog.call(this, title, text, tag);

    this.element.addClass(error ? 'alert alert--danger' : 'alert');

    this.title.addClass('alert__title');
    //this.title.className = 'alert__title';

    this.body.addClass('alert__body');

    this.accept = $('<button></button>').text('Accept').addClass('alert__button').click( function () {
        //this.element.css('display','none');
        this.element.hide();

        callback();
    }.bind(this));


    // var self = this;

    // this.accept.addEventListener('click', function(event) {
    //     self.element.style.display = 'none';
    // });

    this.element.append(this.accept);
}

Alert.prototype = Object.create(Dialog.prototype);
Alert.prototype.constructor = Alert;




function Confirm(title, text, tag, acceptCallback, cancelCallback) {
    Dialog.call(this, title, text, tag);


    this.element.addClass('confirm');
    //this.element.className = 'confirm';

    this.title.addClass('confirm__title');
    //this.title.className = 'confirm__title';

    this.body.addClass('confirm__body');
    //this.body.className = 'confirm__body';


    this.cancel = $('<button></button>').text('Cancel').addClass('confirm__button').click( function () {
        this.element.hide();

        cancelCallback();
    }.bind(this));

    this.element.append(this.cancel);
    /*
    this.cancel = document.createElement('button');
    this.cancel.innerText = 'Cancel';
    this.cancel.className = 'confirm__button';
    
    this.cancel.addEventListener('click', function () {
        this.element.style.display = 'none';

        cancelCallback();
    }.bind(this));

    this.element.appendChild(this.cancel);
    */

   this.accept = $('<button></button>').text('Accept').addClass('confirm__button confirm__button--accept').click( function () {
    $(this.element).removeAttr("style").hide();

    acceptCallback();
}.bind(this));
    /*
    this.accept = document.createElement('button');
    this.accept.innerText = 'Accept';
    this.accept.className = 'confirm__button confirm__button--accept';

    this.accept.addEventListener('click', function () {
        this.element.style.display = 'none';

        acceptCallback();
    }.bind(this));
*/
    this.element.append(this.accept);
}

Confirm.prototype = Object.create(Dialog.prototype);
Confirm.prototype.constructor = Confirm;
