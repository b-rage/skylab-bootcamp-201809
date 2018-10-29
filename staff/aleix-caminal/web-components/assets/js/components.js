function Component(tag) {
    this.element = document.createElement(tag);
}

Component.prototype.show = function () {
    $(this.element).css('display', 'flex');
};

Component.prototype.hide = function () {
    $(this.element).hide();
};

function Panel(title, tag) {
    Component.call(this, tag);
    $(this.element).addClass('panel');

    this.title = document.createElement('h2');
    $(this.title).html(title);
    $(this.title).addClass('panel__title');
    $(this.element).append(this.title);
}

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;

function Form(id, elements) {
    this.form = document.createElement('form');
    if (id) $(this.form).attr('id', id)
    $(this.form).addClass('form');

    function formatLabel(label) {
        var words = label.split('_');
        $.each(words, function(i, word) {
            words[i] = word.charAt(0).toUpperCase() + word.slice(1);
        });
        return words.join(' ');
    }

    var that = this;
    $.each(elements, function(i, element) {
        switch (element.element) {
            case 'input':
                that.group = document.createElement('div');
                $(that.group).addClass('form__group');

                that.input = document.createElement('input');
                if (element.id) $(that.input).attr('id', element.id);
                $(that.input).addClass(element.class ? element.class : 'form-group__input');
                $(that.input).prop('type', element.type ? element.type : 'text');
                $(that.group).append(that.input);

                that.label = document.createElement('label');
                if (element.id) $(that.label).attr('for', element.id);
                $(that.label).addClass(element.class ? element.class : 'form-group__label');
                $(that.label).html(element.label ? element.label : formatLabel(element.id));
                $(that.group).prepend(that.label);

                $(that.form).append(that.group);
                break;
            case 'button':
                if (typeof that.buttons === 'undefined') {
                    that.buttons = document.createElement('div');
                    $(that.buttons).addClass('form__buttons');
                    $(that.form).append(that.buttons);
                }

                that.button = document.createElement('button');
                $(that.button).prop('type', element.type ? element.type : 'button');
                if (element.label) $(that.button).html(element.label);
                $(that.button).addClass(element.class ? element.class : 'form-buttons__button');
                $.each(element.on, function(listener, callback) {
                    $(that.button).on(listener, callback);
                });

                $(that.buttons).append(that.button);
                break;
        }
    });

    return this.form;
}
