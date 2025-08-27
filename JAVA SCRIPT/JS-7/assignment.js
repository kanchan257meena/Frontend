// Que 1

let arrayAvg =(arr) =>{
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    return sum/(arr.length);
}

let arr= [1,2,3,4,5,6,7];

console.log(arrayAvg(arr));

// Que 2
let fn=(n) =>
{
    if(n%2==0){
        console.log(`${n} is an even number`);
        
    }
    else{
         console.log(`${n} is not an even number`);
    }
}

fn(7);

// Que 3
const object ={
    message: 'Hello',

    logMessage(){
        console.log(this.message);
        
    }
};

setTimeout(object.logMessage,1000);
// output - undefined
