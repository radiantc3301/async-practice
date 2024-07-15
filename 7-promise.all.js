const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 1 is resolved')
    }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 2 is resolved')
    }, 1500)
})

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('promise 2 is rejected, unlucky')
//     }, 1500)
// })

Promise.all([promise1, promise2])
.then((value) => console.log(value[0], value[1]))
.catch((error) => console.log(error))

