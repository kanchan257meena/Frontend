let gameSeq=[];
let userSeq=[];

let btns=["box1","box2","box3","box4"];

let started=false;
let level=0;


document.addEventListener("keypress",function(){
   if(started==false){
          console.log("game started");
          started=true;
           levelUp();
    }   
   
})

let h4=document.querySelector("h4");


//LEVEL UP
function levelUp(){
    userSeq=[];
    level++;
    h4.innerText="Level "+ level;

    //random btn choose
    let random=Math.floor(Math.random()*4);
    let randid=btns[random];
    // console.log(randid);
    gameSeq.push(randid);
    console.log(gameSeq);
    
    let randbtn=document.querySelector("#"+randid)
    gameFlash(randbtn);
}


//BUTTON FLASH
function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}

//USER FLASH
function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 300);
}


//BUTTON  PRESS
function btnpress() {
    // console.log("btn was pressed");
    let box=this;
    userFlash(box);
    userid=box.getAttribute("id");
    // console.log(userid);
    userSeq.push(userid);
    checkAns(userSeq.length-1);

       
}


//CHECK ANSWER
function checkAns(idx){
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
          setTimeout(levelUp,1000);
        }
    }
    else{
        h4.innerText=`Game over! your score was ${level} press any key to start.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        
        reset();
    }
}

let boxes=document.querySelectorAll(".box");
    for(box of boxes){
        box.addEventListener("click",btnpress);
    }


  //RESET
  function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
  }  