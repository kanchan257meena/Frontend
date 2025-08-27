const sum=(a,b)=>{
    console.log(a+b);
    
}
const sq = (n) => {
    return n*n;
}

console.log(sq(5));
let count=0;
 const id=setInterval( () =>{
    console.log("hii");
    count+=1;
},2000);

setTimeout( ()=> {
    clearInterval(id);
},10000)
// clearInterval(id);
