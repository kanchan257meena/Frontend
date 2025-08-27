let arr=[10,20,30,40,50];

// let ans=arr.every((el)=> el%10==0);
// console.log(ans);

let minm=arr.reduce( (min,el) =>{
    if(min<el){
        return min;
    }
    else {return el;}
})
console.log(minm);

let sqarr= arr.map((el) => {
    return el*el;
})
console.log(sqarr);


let sum=arr.reduce((s,el)=>{
    return s+el;
})
console.log(sum);


let sarr=["a","b","c","d"];

let newsarr=sarr.map( (el)=>{
   return el.toUpperCase();
})


// que 4

const doubler= (arr,...arg)=>[
    ...arr,...arg.map((v)=>v*2),
];

doubler([1,2,3],4,4);






