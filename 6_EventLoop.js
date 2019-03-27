// https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/
// http://www.ruanyifeng.com/blog/2014/10/event-loop.html
// 1.宏任务（script setTimeout setInterval setImmediate）其中三个异步任务会进如任务队列不会立即执行 满足主线程空闲和触发条件时才会执行
// 2.process.nextTick
// （宏任务微任务的概念官方似乎没有提及 个人理解他是微任务 只不过在微任务队列中要优先执行
// 执行完毕后这个函数的结果中如果还有微任务 这个微任务会进入微任务队列的后面
// 并且是微任务队列中的全部process.nextTick执行完毕才会进如下一次事件循环）
// 这解释了下列程序执行结果中nextTick1到nextTick6的执行顺序
// 3.微任务（Promise整体是一个是微任务 只不过new Promise语句会立即执行类似于console.log 结果就是好像Promise是宏任务 Promise.then是微任务一样）
// (Promise整体是个微任务 只不过new Promise语句让不在then里面的东西直接执行了 所以可以勉强理解为Promise是宏任务 Promise.then是微任务)
// 浏览器中没有process.nextTick和setImmediate

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
