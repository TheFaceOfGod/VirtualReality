let scene, box;
class Tree{
    constructor(){

    }
}
window.addEventListener("DOMContentLoaded", function(){
    
    console.log("Hello 2");
    scene = document.querySelector("a-scene");
    box = document.createElement("a-box");
    box = document.querySelector("#BOX");
    box.r = 1;
    box.g = 1;
    box.b = 1;
    box.dr = 1;
    box.dg = 1;
    box.db = 1;

    console.log(box);
    animation();
})
function animation(){
    window.requestAnimationFrame(animation);
    box.r += box.dr;
    
    box.setAttribute("color", `rgb(${box.r}, ${box.g}, ${box.b})`)
}

function init(){
    console.log("Hello");
}