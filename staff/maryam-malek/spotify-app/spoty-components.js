function Component(tag) {
    this.element = $('<' + tag + '>');

}

function Panel(titileTag, tag, classN) {
    Component.call(this, tag);

    $(this.element).addClass(classN);
    $(this.element).addClass('panel bg-light text-dark');
    $(this.element).addClass('container-fluid');

    this.title = $('<'+titileTag+'>');
    $(this.title).addClass('panel__title');

    $(this.element).append(this.title);
}

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;

function List(titileTag, tag, classN) {
    Panel.call(this, titileTag, tag, classN);

    $(this.title).addClass('list__title');

    this.image = $('<img>');
    $(this.element).append(this.image);
    
    this.div = $('<div>');
    $(this.div).addClass('dropright');
    $(this.element).append(this.div);


    this.titleBtn = $('<button>');
    $(this.titleBtn).attr('type', 'button');
    $(this.titleBtn).attr('data-toggle', 'dropdown');
    $(this.titleBtn).attr('aria-haspopup', 'true');
    $(this.titleBtn).attr('aria-expanded', 'false');

    $(this.titleBtn).addClass('btn btn-outline-info mb-2 mt-2 dropdown-toggle');
    // $(this.titleBtn).text('Show');
    $(this.div).append(this.titleBtn);

    this.body = $('<div>');
    $(this.body).addClass('dropdown-menu');
    $(this.div).append(this.body);
}

List.prototype = Object.create(Panel.prototype);
List.prototype.constructor = List;

function Search(titileTag, tag, classN) {
    Panel.call(this, titileTag, tag, classN);

    this.nav = $('<nav>');
    $(this.nav).addClass('navbar navbar-dark bg-dark');

    $(this.title).addClass('navbar-brand');
    $(this.title).text('Spotify App 🎧');
    $(this.nav).append(this.title);

    $(this.body).addClass('list__body');

    this.form = $('<form>');
    $(this.form).addClass('form-inline');

    this.input = $('<input>');
    $(this.input).attr('type', 'text')
    $(this.input).addClass('form-control mr-sm-2');

    $(this.form).append(this.input);

    this.searchBtn = $('<button>');
    $(this.searchBtn).attr('type', 'submit');
    $(this.searchBtn).addClass('btn btn-outline-info mr-sm-2');
    $(this.searchBtn).text('Search');

    $(this.form).append(this.searchBtn);

    $(this.searchBtn).addClass('search__button');

    $(this.nav).append(this.form);
    $(this.element).append(this.nav);



}

Search.prototype = Object.create(Panel.prototype);
Search.prototype.constructor = Search;

function Player(titileTag, tag, classN) {
    Panel.call(this, titileTag, tag, classN);

    $(this.title).addClass('player__title');

    this.audio = $('<audio>');

    $(this.audio).attr('controls', 'controls');

    $(this.audio).addClass('audio');
    $(this.element).append(this.audio);
}

Player.prototype = Object.create(Panel.prototype);
Player.prototype.constructor = Player;
