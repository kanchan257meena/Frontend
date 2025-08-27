let btn=document.querySelector("button");
let divv=document.querySelector("div")
btn.addEventListener("click",function(){
   let r=Math.random()*255;
   r=Math.floor(r);
   let g=Math.random()*255;
   g=Math.floor(g);
   let b=Math.random()*255;
   b=Math.floor(b);

   let color=`rgb(${r},${g},${b})`;
   console.log(color);
   let h3=document.querySelector("h2");
   h3.innerText=color;
    divv.style.backgroundColor=color;
} )