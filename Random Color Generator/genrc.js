let btn=document.querySelector('button');
btn.addEventListener("click",function(){
    let h1=document.querySelector("h1");
    h1.innerText=getColor();

    let div=document.querySelector("div");
    div.style.backgroundColor=getColor();
    
    console.log("Color Updated");
})
function getColor(){

    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    return `RGB(${red},${green},${blue})`;
}