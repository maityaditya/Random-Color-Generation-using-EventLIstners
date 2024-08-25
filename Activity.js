let heading=document.querySelector("h1");
let btn=document.querySelector("button");
let box=document.querySelector("div");

btn.addEventListener("click",function(){
    heading.innerText=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    box.style.backgroundColor=heading.innerText;
});