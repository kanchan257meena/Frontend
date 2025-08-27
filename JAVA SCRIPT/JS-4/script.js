// for (let i = 1; i <= 10; i++) {
//    console.log(`5 * ${i} = ${5*i}`);  
// }



/*let fav ="avatar";
var name="ok";
while(name !=fav){
 let n2= prompt("enter the movie name")
 name=n2;
if(name==fav){
    console.log(`your ans is correct ${fav}`);   
}
else{
    console.log("try again");   
}

}*/

let todo=[];
let req=prompt("please enter your req");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }

    if(req=="list"){
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
            
        }
    }
    else if(req=="add"){
       let task= prompt("please enter task");
       todo.push(task);
       console.log("task added");
       
    }
    else if(req=="delete"){
        let idx=prompt("please enter the task index");
        todo.splice(idx,1);
    }
     req=prompt("please enter your req");
}







 