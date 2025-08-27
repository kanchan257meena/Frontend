// let num=Math.random();
// num=num*100;
// console.log(num);
// num=Math.floor(num);
// console.log(num);
// console.log(
// Math.floor(Math.random()*100));

let max=prompt("enter the maximum number");
let random=Math.floor(Math.random()*max) +1;
// console.log(random);

let guess =prompt("guess the number");


while(true){
    if(guess=="quit"){
        console.log("game end");
        break;   
    }
    if(guess==random){
        console.log("u won");
        break;
    }
    else if(guess<random){
        console.log("your answer is small");
        guess=prompt("guess the number");
        
    }
    else{
         console.log("your answer is large");
        guess=prompt("guess the number");
    }

}






