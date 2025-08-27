let arr=[1,2,3,4,5];

let fn=(arr) =>{
    for(let i of arr){
        console.log(i+1);
        
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]+1;
    }

    console.log(arr);
    
}
fn(arr);

let str="abcdabcdefgggh";
let ans="abcdefgh";

let arr2=["Australia", "Germany","United States of America"];

let length=0;
let max=0;
for(let c of arr2){
    max=Math.max(max,c.length);
    if(max=c.length){
        length=c;
    }
}
console.log(length);

// Que 5
let start=prompt("write a starting num");
let end=prompt("write an ending number");

let num=Math.floor(Math.random()*(end-start) );
console.log(num+start);
