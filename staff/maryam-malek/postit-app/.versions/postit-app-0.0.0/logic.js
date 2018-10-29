//Bussines logic

const logic = {
    createPostit(postit) {
        const postits = JSON.parse(storage.getItem('postits'))
        
        postits.push(postit)
        
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id) {

        let postits = JSON.parse(storage.getItem('postits'))
        
        postits = postits.filter(postit => postit.id !== id)
        
        storage.setItem('postits', JSON.stringify(postits))
    },

    listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    changePostit(textEdit, id, show) {
        let postits = JSON.parse(storage.getItem('postits'))
        
        let index = postits.findIndex(postit => postit.id == id)
    
        postits[index].text = textEdit

        postits[index].show = show

        storage.setItem('postits', JSON.stringify(postits))
    },
    apearEdit(id, show) {
        let postits = JSON.parse(storage.getItem('postits'))
        
        let index = postits.findIndex(postit => postit.id == id)
    
        postits[index].show = show
        
        storage.setItem('postits', JSON.stringify(postits))
    }
}