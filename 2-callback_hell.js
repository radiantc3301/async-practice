function task1(cb){
    setTimeout(() => {
        console.log('1');
        cb();
    },1000)
}

function task2(cb){
    setTimeout(() => {
        console.log('2');
        cb();
    },3000)
}

function task3(cb){
    setTimeout(() => {
        console.log('3');
        cb();
    },500)
}

function task4(cb){
    setTimeout(() => {
        console.log('4');
        cb();
    },4000)
}

function task5(cb){
    setTimeout(() => {
        console.log('5');
        cb();
    },1500)
}

function task6(cb){
    setTimeout(() => {
        console.log('6');
        cb();
    },4500)
}

function task7(cb){
    setTimeout(() => {
        console.log('7');
        cb();
    },3500)
}


task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6(() => {
                        task7(() => {
                            console.log('done')
                        })
                    })
                })
            })
        })
    })
})