import data from '../data/datalayer'
const {Postit} = data
require('isomorphic-fetch')


const userService = {

    addPostIt(message, {postits}){
       
        if (typeof message !== 'string') throw TypeError(`message is not a string`)
        if (!message.trim()) throw Error('message is empty or blank')
        if (!(postits instanceof Array)) throw Error("The param postits is not correct...")

        postits.push(new Postit(message));
        
    },

    deletePostIt(id, {postits}){

        if (typeof id !== 'number') throw TypeError(`id is not a number`)
       
        if (!(postits instanceof Array) || postits.length === 0) throw Error("The param postits is not correct...")

        const indexof = postits.indexOf(el => el.id === id)
        postits.splice(indexof,1)
        
    },

    editPostIt(id, {postits}, _text){

        if (typeof _text !== 'string') throw TypeError(`_text is not a string`)
        if (!_text.trim()) throw Error('_text is empty or blank')
        if (!(postits instanceof Array) || postits.length === 0) throw Error("The param postits is not correct...")
        if (typeof id !== 'number') throw TypeError(`id is not a number`)

        let postit = postits.find(el => el.id === id)
        postit.text = _text
    },

    registerUser(name, surname, username, password) {

        if (typeof name !== 'string') throw TypeError(`name is not a string`)
        if (typeof surname !== 'string') throw TypeError(`surname is not a string`)
        if (typeof username !== 'string') throw TypeError(`username is not a string`)
        if (typeof password !== 'string') throw TypeError(`password is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch('https://skylabcoders.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ name, surname, username, password, postits:[] })
        })
            .then(res => res.json())
            .then(res => {
                             
                if (res.error) throw Error(res.error)

                return res.data.id
            })
    },

    updateUser(id, token, {name, surname, username, postits}){
        
        if (typeof id !== "string") throw TypeError (`id is not a string`)
        if (typeof token !== "string") throw TypeError (`token is not a string`)
        if (typeof name !== "string") throw TypeError (`name is not a string`)
        if (typeof surname !== "string") throw TypeError (`surname is not a string`)
        if (typeof username !== "string") throw TypeError (`username is not a string`)
        if (!name.trim()) throw TypeError (`name is empty`)
        if (!surname.trim()) throw TypeError (`surname is empty`)
        if (!username.trim()) throw TypeError (`username is empty`)
        if (!id.trim()) throw TypeError (`id is empty`)
        if (!token.trim()) throw TypeError (`token is empty`)
         
       
        return fetch(`https://skylabcoders.herokuapp.com/api/user/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": `Bearer ${token}`
            },
           body: JSON.stringify({name, surname, username,  postits})
        })
            .then(res => res.json())
            .then(res => {
                             
                if (res.status === "OK") 
                    return true
                else
                    throw Error(res.error)
            })
    },


    authenticateUser(username, password){

       
        if (typeof username !== "string") throw TypeError (`username is not a string`)
        if (typeof password !== "string") throw TypeError (`pasword is not a string`)
        if (!username.trim()) throw TypeError (`username is empty`)
        if (!password.trim()) throw TypeError (`password is empty`)
      
        return fetch('https://skylabcoders.herokuapp.com/api/auth', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({username, password })
        })
            .then(res => res.json())
            .then(res => {
                             
                if (res.error) throw Error(res.error)

                return {id: res.data.id, token: res.data.token}
            })
    },

    getUserInfo(id, token){
        
       
        if (typeof id !== "string") throw TypeError (`id is not a string`)
        if (typeof token !== "string") throw TypeError (`token is not a string`)
        if (!id.trim()) throw TypeError (`id is empty`)
        if (!token.trim()) throw TypeError (`token is empty`)
       

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${id}`, {

            mehtod: "GET",
            headers:{
                "Authorization": `Bearer ${token}`
            },
           
        })
        .then( res => res.json())
        .then(res => {

            if (res.status === "OK") {
               
                return res.data}
            else
                
                throw Error(res.error)
            
               

        })
    },

    deleteUser(id, token,username, password){

       
        if (typeof id !== "string") throw TypeError (`id is not a string`)
        if (typeof token !== "string") throw TypeError (`token is not a string`)
        if (typeof username !== "string") throw TypeError (`username is not a string`)
        if (typeof password !== "string") throw TypeError (`password is not a string`)
        if (!username.trim()) throw TypeError (`username is empty`)
        if (!password.trim()) throw TypeError (`pasword is empty`)
        if (!id.trim()) throw TypeError (`id is empty`)
        if (!token.trim()) throw TypeError (`token is empty`)
     

        return fetch(`https://skylabcoders.herokuapp.com/api/user${id}`, {

            mehtod: "DELETE",
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json; charset=utf-8"
            }           
           
        }).then( res => res.json()).then(res => {

            if (res.status === "OK") 
                return true
            else
                throw Error(res.error)

        })
    }

}

// descomentar para la aplicacion
export default userService

//descomentar para test
//module.exports = userService

