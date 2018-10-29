import { BoardsTable, PostsTable } from './model'

const LOGIC = {
    boards: new BoardsTable(),
    posts: new PostsTable(),

    addBoard(query) {
        this.boards.newEntity(query).insert();
        return this.all('boards')
    },

    deleteBoard(id) {
        const board = this.boards.get(id)
        board.delete()
        return this.all('boards')
    },

    updateBoard(id, query) {
        const board = this.boards.get(id)
        board.update(query)
        return this.all('boards')
    },

    addPost(query) {
        const post = this.posts.newEntity(query)
        post.insert();
        return this.find('posts', {
            board_id: post.board_id
        })
    },

    deletePost(id) {
        const post = this.posts.get(id)
        post.delete()
        return this.find('posts', {
            board_id: post.board_id
        })
    },

    find(model, query) {
        return this[model].find(query)
    },

    all(model) {
        return this[model].all()
    }
}

export default LOGIC
