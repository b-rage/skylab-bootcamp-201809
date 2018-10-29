class Component {
    constructor(tag, className) {
        this.element = document.createElement(tag);
        $(this.element).addClass(className);
    }

    show(display = 'block') {
        $(this.element).css('display', display);
    }

    hide() {
        $(this.element).hide();
    }
}

class Footer extends Component {
    constructor() {
        super('footer', 'footer')

        // control section
        this.control = document.createElement('section');
        $(this.control).addClass('control');
        $(this.element).append(this.control);

        this.play = document.createElement('button');
        $(this.play).attr('id', 'play');
        $(this.play).addClass('control__button');
        $(this.play).html('P');
        $(this.control).append(this.play);

        this.stop = document.createElement('button');
        $(this.stop).attr('id', 'stop');
        $(this.stop).addClass('control__button');
        $(this.stop).html('S');
        $(this.control).append(this.stop);

        // player section
        this.player = document.createElement('section');
        $(this.player).addClass('player');
        $(this.element).append(this.player);

        this.audio = document.createElement('audio');
        $(this.audio).attr('id', 'player');
        $(this.player).append(this.audio);

        this.ahead = document.createElement('label');
        $(this.ahead).attr('id', 'time-ahead');
        $(this.ahead).addClass('player__time');
        $(this.ahead).html('-:--');
        $(this.player).append(this.ahead);

        this.bar = document.createElement('div');
        $(this.bar).addClass('player__bar');
        this.progress = document.createElement('span');
        $(this.progress).attr('id', 'progress');
        $(this.progress).width(0);
        $(this.bar).append(this.progress);
        $(this.player).append(this.bar);

        this.left = document.createElement('label');
        $(this.left).attr('id', 'time-left');
        $(this.left).addClass('player__time');
        $(this.left).html('-:--');
        $(this.player).append(this.left);

        // current song
        this.current = document.createElement('section');
        $(this.current).addClass('current-song');
        $(this.element).append(this.current);
    }

    printCurrent(image, track, artist, album) {
        $(this.current).html('');

        this.wrapper = document.createElement('div');
        $(this.wrapper).addClass('current-song__image');
        $(this.current).append(this.wrapper);

        this.image = document.createElement('div');
        $(this.image).css('background-image', 'url(' + image + ')');
        $(this.wrapper).append(this.image);

        this.text = document.createElement('div');
        $(this.text).addClass('current-song__text');
        $(this.current).append(this.text);

        this.track = document.createElement('h1');
        $(this.track).html(track);
        $(this.text).append(this.track);

        this.artist = document.createElement('p');
        $(this.artist).html(album);
        $(this.text).append(this.artist);

        this.album = document.createElement('p');
        $(this.album).html(artist);
        $(this.text).append(this.album);
    }
}

class Search extends Component {
    constructor(title, tag, callback) {
        super(tag, 'search');

        this.title = document.createElement('h1');
        $(this.title).html(title);
        $(this.title).addClass('search__title');
        $(this.element).append(this.title);

        this.form = new Form('search', [
            {
                element: 'input',
                type: 'search',
                label: false,
                class: 'search__input'
            }
        ]).form;

        $(this.form).on('submit', function(event) {
            event.preventDefault();
            callback(this.form);
        }.bind(this));
        $(this.element).append(this.form);
    }
}

class Panel extends Component {
    constructor(title, tag, callback) {
        super(tag, 'panel');
        $(this.element).hide();

        this.title = document.createElement('h2');
        $(this.title).html(title);
        $(this.title).addClass('panel__title');
        $(this.element).append(this.title);

        this.body = document.createElement('section');
        $(this.body).addClass('panel__body');
        $(this.element).append(this.body);

        this.callback = callback;
    }

    printItem(item) {
        let image  = item.images.length ? item.images[0].url : 'assets/img/placeholder.png';
        this.item = document.createElement('article');
        $(this.item).addClass('container');
        $(this.body).append(this.item);

        this.wrapper = document.createElement('div');
        $(this.wrapper).addClass('container__image');
        $(this.wrapper).on('click', function() {
            this.callback(item.id, item.name, image);
        }.bind(this));
        $(this.item).append(this.wrapper);

        this.image = document.createElement('div');
        $(this.image).css('background-image', 'url(' + image + ')');
        $(this.wrapper).append(this.image);

        this.name = document.createElement('h4');
        $(this.name).addClass('container__title');
        $(this.name).html(item.name);
        $(this.item).append(this.name);

        if (item.artists) {
            this.small = document.createElement('small');
            $(this.small).addClass('container__title container__title--small');
            $(this.small).html(item.artists[0].name);
            $(this.item).append(this.small);
        }
    }
}

class Artists extends Panel {
    constructor(title, tag, callback) {
        super(title, tag, callback);
    }
}

class Albums extends Panel {
    constructor(title, tag, callback) {
        super(title, tag, callback);
    }
}

class Tracks extends Panel {
    constructor(title, tag, callback) {
        super(title, tag, callback);
    }

    printTrack(track, image) {
        this.track = document.createElement('article');
        $(this.track).addClass('container');
        $(this.body).append(this.track);

        this.wrapper = document.createElement('div');
        $(this.wrapper).addClass('container__image');
        $(this.wrapper).on('click', function() {
            this.callback(track.preview_url, track.name);
        }.bind(this));
        $(this.track).append(this.wrapper);

        this.image = document.createElement('div');
        $(this.image).css('background-image', 'url(' + image + ')');
        $(this.wrapper).append(this.image);

        this.title = document.createElement('h4');
        $(this.title).addClass('container__title');
        $(this.title).html(track.name);
        $(this.track).append(this.title);
    }
}

class Form {
    constructor(id, elements) {
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

                    if (element.label !== false) {
                        that.label = document.createElement('label');
                        if (element.id) $(that.label).attr('for', element.id);
                        $(that.label).addClass(element.class ? element.class : 'form-group__label');
                        $(that.label).html(element.label ? element.label : formatLabel(element.id));
                        $(that.group).prepend(that.label);
                    }

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
    }
}
