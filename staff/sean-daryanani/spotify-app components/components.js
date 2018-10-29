class Component {
    constructor(tag) {
        this.element = document.createElement(tag);
        this.element.className = 'test'
    }
    show() {
        this.element.style.display = 'block';
    }

    hide() {
        this.element.style.display = 'none';
    }
}


class Search extends Component {
    constructor(tag, callback) {
        super(tag)

        this.element.className = 'search'

        this.form = document.createElement('form')
        this.form.className = 'search-form'
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            let query = this.name.value
            callback(query)
        })
        this.element.appendChild(this.form)

        this.name = document.createElement('input');
        this.name.className = 'search__input';
        this.name.placeholder = 'Search';

        this.form.appendChild(this.name);
    }


}



class List extends Component {
    constructor(tag, title) {
        super(tag)
        this.element.className = 'List'

        this.title = document.createElement('h2')
        this.title.innerText = title
        this.title.className = 'list__title'
        this.element.appendChild(this.title)
        this.ul = document.createElement('ul')
        this.ul.className = 'list-group'
        this.element.appendChild(this.ul)
    }

    emptyList() {
        while(this.ul.firstChild) this.ul.removeChild(this.ul.firstChild)
    }
}


class TrackBox extends Component {
    constructor(tag, src, songName) {
        super(tag)
        this.element.className = 'track'

        this.image = document.createElement('img')
        this.image.src = src
        this.element.appendChild(this.image)


        this.body = document.createElement('p')
        this.element.appendChild(this.body)
        this.body.innerText = songName

    }
}