require('isomorphic-fetch')
let sessionStorage = require('sessionstorage')


const { expect } = require('chai')

const logic = require('./userlogic')

describe('userlogic', () => {

    beforeEach(() => {
        let user = {
            id: "5bd0bc55e773bb00099e1eb7",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZDBiYzU1ZTc3M2JiMDAwOTllMWViNyIsImlhdCI6MTU0MDQ4Njc1NiwiZXhwIjoxNTQwNDkwMzU2fQ.ULJzj6U8uh5_oNrY52kCf_Lwwkl4NxQJayRoj_sSxSM"
        }
        sessionStorage.setItem('user', JSON.stringify(user))
    })

    describe('createPlaylist', () => {
        
        let name = 'test-' + Math.random().toString()
        it('should succesfully create a playlist', () => {
            return logic.createPlayList(name).then((res) => {
                expect(res).not.to.be.undefined
            })
        })

        it('should fail on already existing playlist', () => {
            return logic.createPlayList(name)
                .catch(err => {
                    expect(err.message).to.equal(`Exists a play list with the name: ${name}`)
                })
        })

        it('should fail on empty or blank playlist name', () => {
            return logic.createPlayList('\n')
                .catch(err => {
                    expect(err.message).to.equal(`name is empty or blank`)
                })
        })

        it('should fail on non-string playlist name', () => {
            return logic.createPlayList()
                .catch(err => {
                    expect(err.message).to.equal(`id playlist is not a string`)
                })
        })

    })

    describe('sessionStorage', () => {
        it('should succeed on user already in sessionStorage', ()=> {
            const user = JSON.parse(sessionStorage.getItem('user'))
            expect(user.id).to.be.an('string')
            expect(user.token).to.be.an('string')
        })
        it('should fail if data not in sessionStorage', ()=> {
            const user = {}
            expect(user.id).to.be.an('string')
            expect(user.token).to.be.an('string')
        })
    })
})