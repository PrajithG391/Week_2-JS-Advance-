fetch("https://api.sampleapis.com/coffee/hot")
.then(res => res.json())
.then(data => console.log(data))
.catch (error => 
    console.log("there is an error",error.message))