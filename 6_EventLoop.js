// 宏任务（console.log Promise等）
// process.nextTick（他不是微任务 是宏微之间的 下一次事件循环之前执行的函数）
// Promise.then(微任务)
// (Promise整体是个微任务 只不过new Promise语句让不在then里面的东西直接执行了 所以可以勉强理解为Promise是宏任务 Promise.then是微任务)
// 异步任务（setTimeout setInterval setImmediate）

console.log('start');
Promise.resolve().then(function() {
    console.log('then2');
})

process.nextTick(function(){
    console.log('nextTick1');
    process.nextTick(function(){
        console.log('nextTick2')
    })
    new Promise(function(resolve){
        console.log('promise2')
        resolve()
    }).then(function(){
        console.log('then3')
    })
    setTimeout(function(){
        console.log('setTimeout2')
    })
    console.log('end')
})

process.nextTick(function(){
    console.log('nextTick5');
    process.nextTick(function(){
        console.log('nextTick6')
    })
})


new Promise(function(resolve){
    console.log('promise1')
    resolve()
}).then(function(){
    console.log('then1')
})


setImmediate(function(){
    console.log('setImmediate1');
    process.nextTick(function(){
        console.log('nextTick3');
    })
})

setImmediate(function(){
    console.log('setImmediate2')
})

setTimeout(function(){
    console.log('setTimeout');
    process.nextTick(function(){
        console.log('nextTick4');
    })
})
