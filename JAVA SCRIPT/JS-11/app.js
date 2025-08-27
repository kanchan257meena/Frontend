const { url } = require("../JS-12/app");

function hello() {
    console.log("hello");
}


function demo(params) {
    hello();
}
// demo();

function one() {
    return 1;
}

function two(params) {
    return one() + one();
}

function three(params) {
    let ans = two() + one();
    console.log(ans);
}

// three(); 


//CALLBACK
let h1 = document.querySelector("h1");

function color(color, delay, next) {
    setTimeout(() => {
        h1.style.color = color;
        if (next) next();
    }, delay);
}

color("red", 1000, () => {
    color("blue", 1000);
})

//callback hell (Asynchronous)

function savetodb(data, success, failure) {
    let is = Math.floor(Math.random() * 10) + 1;
    if (is > 4) { 
        // success()
    }
    else {
        // failure();
    }
}

savetodb("kanchan meena", () => {
    console.log("data was saved");
    savetodb("kanchan meena", () => {
    console.log("data was saved");

}, () => {
    console.log("weak connection");
})
}, () => {
    console.log("weak connection");
    
})


//PROMISES
 
function savetodb(data) {
  
    return new Promise((success,failure)=>{
          let is = Math.floor(Math.random() * 10) + 1;
             if (is > 4) { 
        success("data was saved")
    }
    else {
        failure("weak connection");
    }
    })
}

//then & catch

/*
let request =savetodb("kanchan");
request.then(()=>{
    console.log("promise was solved");
    console.log(request);
    
    
}).catch(()=>{
    console.log("promise was rejected ");
    console.log(request);
    
})
    */


// PROMISE chaining

savetodb("kanchan")
.then((result)=>{
    console.log("data1 saved");
    // console.log(request);
    console.log("result : ",result);
    
  return  savetodb("meena")

    
}).then((result)=>{
    console.log("data2 saved");   
      console.log("result : ",result); 
    return savetodb("dvdf")
}).then((result)=>{
    console.log("data3 saved");   
      console.log("result : ",result); 
})
.catch((result)=>{
     console.log("result : ",result);
    console.log("promise was rejected ");
     
    console.log(request);
    
});
//using promise
fetch(url)
    .then((res) => {
        // console.log(res.json()); 
        res.json().then((data) => {
            console.log(data);
        });
    })
    .catch((err) => {
        console.log(err);
    });







