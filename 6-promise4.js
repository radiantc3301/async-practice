const promise1 = new Promise((resolve, reject) => {
    resolve('promise 1 is resolved')
})

const promise2 = new Promise((resolve, reject) => {
    resolve('promise 2 is resolved')
})

const promise3 = new Promise((resolve, reject) => {
    reject('promise 3 is rejected, unlucky')
})

promise1
.then((value) => {
    console.log(value)
    return promise2
}).then((value) => {
    console.log(value)
    return promise3
}).catch((error) => {
    console.log(error)
});