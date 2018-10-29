function Component() {
    this.$element = $('<section>');
}

Component.prototype.show = function () {
    this.$element.css('display', 'block');
};

Component.prototype.hide = function () {
    this.$element.css('display', 'none');
};


function Panel(itemsToList, classForSection, title, htag) {

    Component.call(this)
//listArtist(artists) {

    if($oneTrack.css('display') !== 'none') $oneTrack.hide()

    if($tracks.css('display') !== 'none') $tracks.hide()

    if($albums.css('display') !== 'none') $albums.hide()


    this.$element.hide()
    this.element.addClass(`.${classForSection}`);


    this.$ul = this.element.find('ul')
    this.$title = this.element.find(`${htag}`)
    this.$title.text(title)

    this.$ul.empty()


    itemsToList.forEach(item => {
        let itemName = item.name
        const $a = $(`<a href="#">${itemName}</a>`)

        $a.click(() => {
            var id = item.id
            logic.searchAlbums(id)
                .then(res => {
                    var retornItem = res.items
                    view.listAlbums(retornItem,itemName)
                })
                .catch(console.error)
        })

        this.$li = $('<li>')

        this.$li.append($a)

        this.$ul.append(this.$li)
    })

}


Artists.prototype = Object.create(Component.prototype);
Artists.prototype.constructor = Artists;