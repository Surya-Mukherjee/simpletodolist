const div=document.querySelector(".button");
const list=document.querySelector(".list")
const input = document.querySelector(".input");
const btn= document.querySelector(".button button");
let a=0;
btn.addEventListener("click",(evt)=>{
    let el1=document.createElement("input");
    el1.type="checkbox";
    let brk=document.createElement("br");

    let el=document.createElement("input");
   
    input.append(el1);
    input.append(el);
    input.append(brk);
    
})