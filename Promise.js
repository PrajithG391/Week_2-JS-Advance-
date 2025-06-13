new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("HI");
        resolve()
    }, 2000)
}).then(function(){
    console.log("Promise has finished")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Prajith" , email:"hi@gmail.com"})
    })
}, 3000)

promiseThree.then(function(user){
    console.log(user);
})