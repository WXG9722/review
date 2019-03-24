new Promise((resolve)=>{
    resolve()
}).then(function(){
    console.log(1)
    new Promise((resolve)=>{
        resolve()
    }).then(function(){
        console.log(4)
    })
})

new Promise((resolve)=>{
    resolve()
}).then(function(){
    console.log(2)
    new Promise((resolve)=>{
        resolve()
    }).then(function(){
        console.log(5)
    })
})



console.log(3)