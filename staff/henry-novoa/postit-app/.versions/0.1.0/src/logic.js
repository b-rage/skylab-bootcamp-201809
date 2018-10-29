// Business (logic)?
import { storage, Postit } from './data'
const logic = {
    
    createPostit(text) {
        const postit = new Postit(text)

        const postits = this.listPostits()

        postits.push(postit)

        this.persistPostits(postits)
    },

    listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    persistPostits(postits) {
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id) {
        let postits = this.listPostits()

        postits = postits.filter(postit => postit.id !== id)

        this.persistPostits(postits)
    },
    editPost(id){
      
        let element = document.getElementById(id)
        if(element.disabled){
        element.disabled = false}
        else{
            const posits = this.listPostits()
            let input = element.value
            let index = posits.findIndex(element => element.id ===id)
            posits[index].text = input
            this.persistPostits(posits)
           
            element.disabled = true}


      
        

        // let postits=this.listPostits()
        // postits = postits.filter(postit => postit.id == id)
        // console.log(postits)
    }
}

export default logic