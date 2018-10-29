import { UsersTable, BoardsTable, PostsTable } from './model'
import sha256 from 'js-sha256';

const LOGIC = {
    users: new UsersTable(),
    boards: new BoardsTable(),
    posts: new PostsTable(),

    addBoard(form, user_id) {
        if (this.validate(form, ['title'])) {
            this.boards.newEntity({
                title: form.querySelector('input[name="title"]').value,
                user_id: user_id
            }).save()
        }

        setTimeout(function() {
            form.querySelector('input[name="title"]').classList.remove('is-invalid')
        }, 3000)

        form.querySelector('input[name="title"]').value = ''
        return this.boards.find({
            user_id: user_id
        })
    },

    deleteBoard(id) {
        const board = this.boards.get(id)
        board.delete()
        return this.boards.find({
            user_id: board.user_id
        })
    },

    updateBoard(id, title) {
        const board = this.boards.get(id)
        board.title = title
        board.save()
        return this.boards.find({
            user_id: board.user_id
        })
    },

    addPost(input, board_id) {
        if (input) {
            this.posts.newEntity({
                title: input.value,
                board_id: board_id
            }).save();
        }

        input.value = '';
        return this.posts.find({
            board_id: board_id
        })
    },

    deletePost(id) {
        const post = this.posts.get(id)
        post.delete()
        return this.posts.find({
            board_id: post.board_id
        })
    },

    register(form) {
        if (this.validate(form, ['name', 'username', 'password', 'confirm_password'])) {
            if (form.querySelector('input[name="password"]').value === form.querySelector('input[name="confirm_password"]').value) {
                return this.users.newEntity({
                    name: form.querySelector('input[name="name"]').value,
                    username: form.querySelector('input[name="username"]').value,
                    password: sha256(form.querySelector('input[name="password"]').value)
                }).save();
            } else {
                this.error('Passwords do not match');
                form.querySelector('input[name="password"]').classList.add('is-invalid')
                form.querySelector('input[name="confirm_password"]').classList.add('is-invalid')
            }
        } else {
            this.error('Fields in red are mandatory')
        }
    },

    login(form) {
        if (this.validate(form, ['username', 'password'])) {
            let auth = this.findAuth(form.querySelector('input[name="username"]').value, sha256(form.querySelector('input[name="password"]').value))
            if (auth) {
                sessionStorage.setItem('auth', JSON.stringify(auth))
                return auth
            } else {
                this.error('Username or password are invalid')
                form.querySelector('input[name="username"]').classList.add('is-invalid')
                form.querySelector('input[name="password"]').classList.add('is-invalid')
            }
        } else {
            this.error('Fields in red are mandatory')
        }
    },

    logout() {
        sessionStorage.removeItem('auth')
        return {}
    },

    findAuth(username, password) {
        try {
            const user_id = this.users.find({
                username: username,
                password: password
            })[0].id
            return this.users.get(user_id)
        } catch (e) {
            return false
        }
    },

    getAuth() {
        return JSON.parse(sessionStorage.getItem('auth')) || {}
    },

    validate: function(form, inputs) {
        if (typeof form !== 'object' || form.tagName !== 'FORM') throw Error('no form passed as argument');
        if (!Array.isArray(inputs) || inputs.length < 1) throw Error('array is not valid');

        var result = 1;
        for (var i in inputs) {
            var input = form.querySelector('input[name="' + inputs[i] + '"]');
            if (!input.value) {
                input.classList.add('is-invalid');
                result = 0;
            } else {
                input.classList.remove('is-invalid');
            }
        }

        return result;
    },

    error: function(message) {
        if (!message) throw Error('message is not valid');

        alert(message);
    }
}

export default LOGIC
