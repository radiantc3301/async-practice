const promise = new Promise((resolve, reject) => {
    const allWentWell = true
    if (allWentWell) {
        resolve('Yay!')
    } else {
        reject('Oh no!')
    }
})

console.log(promise)