let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function() {
   let li= document.createElement("li");
   let del=document.createElement("button");

   del.innerText="del";
   del.classList.add("delete");

    ul.appendChild(li);
  li.innerText=inp.value;
  li.appendChild(del);

})



