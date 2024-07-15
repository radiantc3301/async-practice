const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random()  * 10)
    console.log(randomNumber)
    setTimeout(() => {
        if (randomNumber > 5) {
            resolve('Yay!')
        } else {
            reject('Oh no!')
        }
    }, 2000)
})

promise.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
})