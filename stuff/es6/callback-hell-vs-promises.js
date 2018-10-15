// callback hell

function amFeelingLucky(win, lose) {
    setTimeout(() => {
        const now = Date.now()

        const even = now % 2 === 0

        if (even) win('you win, even')
        else lose('you lose, ood')
    }, 1000)
}

amFeelingLucky(console.log,
    message => {
        console.error(message)

        amFeelingLucky(console.log,
            message => {
                console.error(message)

                amFeelingLucky(console.log,
                    message =>
                        console.error(message)
                )
            })
    })

// promise

function amFeelingLucky() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const now = Date.now()

            const even = now % 2 === 0

            if (even) resolve('you win, even')
            else reject('you lose, ood')
        }, 1000)
    })
}

// amFeelingLucky()
//     .then(message => console.log(message),
//         message => {
//             console.error(message)

//             amFeelingLucky()
//                 .then(message => console.log(message),
//                     message => {
//                         console.error(message)

//                         amFeelingLucky()
//                             .then(message => console.log(message),
//                                 message =>
//                                     console.error(message)
//                             )
//                     })
//         })

function amFeelingLucky() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const now = Date.now()

            const even = now % 2 === 0

            if (even) resolve('you win, even')
            else reject('you lose, ood')
        }, 1000)
    })
}

amFeelingLucky()
    .then(message => console.log(message))
    .catch(message => {
        console.error(message)

        return amFeelingLucky()
            .then(message => console.log(message))
    })
    .catch(message => {
        console.error(message)

        return amFeelingLucky()
            .then(message => console.log(message))
    })
    .catch(message => {
        console.error(message)
    })