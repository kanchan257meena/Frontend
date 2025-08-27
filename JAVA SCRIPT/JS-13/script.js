 let url="https://catfact.ninja/fact";


//using async await
let data;
async function getData() {
  try {
    let res = await axios.get(url);
     data=res.data.fact;
    
  } catch (err) {
    console.log("Error:", err);
  }
}
getData();
let btn=document.querySelector("button");
let p=document.querySelector("p");

btn.addEventListener("click",()=>{
    getData();
    p.innerText=data;
})


//dog api
let url2="https://dog.ceo/api/breeds/image/random";
let img=document.querySelector(".dog");
dog();
async function dog( ) {
    try {
        let link=await axios.get(url2);
        // console.log(link.data.message);
       let data =link.data.message;
       return data;

    } catch (error) {
        console.log(error);
        
    }
    
}



let nextdi=document.querySelector(".dogimg");

nextdi.addEventListener("click",async ()=>{
  let src= await  dog();
  img.src=src;
})

