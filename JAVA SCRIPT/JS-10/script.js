let a=10;
console.log(a);
/*
let btn=document.querySelectorAll("button");
for(bt of btn ){
     let id=bt.innerText;
    bt.onclick=function(){
        sayhi(id)
    }
    
    bt.addEventListener("dblclick",function(){
        console.log("dbl click");
        
    })
}

function sayhi(id){
    console.log("hii");
    alert(`${id} was clicked`);
   
}
*/

//p
let p=document.querySelector("p");
p.addEventListener("click",function(){
    console.log("p was clicked");
    
})

//box
let div=document.querySelector("div");
   let h3=document.querySelector("h3");
div.addEventListener("mousemove",function(){
 
    h3.innerHTML="I Love You";
})

div.addEventListener("mouseleave",function(){
 
    h3.innerHTML="";
})

//keyboard event
let clickme=document.getElementById("clickme");


clickme.addEventListener("keyup", function (event) {
    // console.log(event.code);
    if(event.code=="ArrowUp"){
        console.log("move forward");
        
    }
    else   if(event.code=="ArrowDown"){
        console.log("move backward");
        
    }
    else   if(event.code=="ArrowRight"){
        console.log("move right");
        
    }

    else  {
        console.log("move left");
        
    }
    
    // console.log("button was clicked");
    
});



// form part
let form=document.querySelector("form");

form.addEventListener("submit",function (event) {
    event.preventDefault();
    // console.log("s");
    let inp=document.getElementById("user")
    console.log(inp.value );
    
    
    
})

let user=document.getElementById("user");
user.addEventListener("change", function(){
    console.log("input change");
    console.log("final value =" , this.value);
    
    
})
let pass=document.getElementById("pass");
pass.addEventListener("input", function(){
    console.log("password change change");
    console.log("final value =" , this.value);
    
    
})


//practice question

let greenu=document.querySelector(".green");

greenu.addEventListener("click",function () {
    greenu.style.backgroundColor="green";
})