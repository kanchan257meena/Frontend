let mi=document.getElementById("mainImg");

console.log(mi.id);

let para=document.getElementById("description");
console.log(para);

let oi=document.getElementsByClassName("oldImg");
console.log(oi);

// oi[0].src="spiderman_img.png";
for(let i=0;i<3;i++){
    setTimeout(() => {
        // oi[i].src="spiderman_img.png";
    }, (i+1)*2000);
}

let inp=document.createElement('input')
let btn=document.createElement('button')
btn.innerText="click me";
let bdy=document.querySelector('body');


bdy.appendChild(btn)
bdy.appendChild(inp)
 
inp.placeholder="username"
btn.setAttribute("id","btn");

let btnn=document.querySelector('#btn');

btnn.classList.add('btnstyle')





