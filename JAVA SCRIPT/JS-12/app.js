async function greet(params) {
    // abc.abc();
    return "hello!";
}

// let hello = async () => {};
greet().then(()=>{
    console.log("promise was resolved");
    
})
.catch(()=>{
    console.log("rejected");
    
})


//AWAIT
async function demo(params) {
    await getno(1000);
    await getno(1000);
    await getno(1000);
}

function getno(delay) {
    return new Promise((resolve, reject) => {
        setTimeout (()=>{
            let no=Math.floor(Math.random()*10);
            console.log(no);
            resolve()
            
        },delay);
    })
    
}


// FETCHING API

export let url="https://catfact.ninja/fact";


//using async await

async function getData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}

getData();
