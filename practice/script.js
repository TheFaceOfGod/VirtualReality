let scene, box;
class Tree{
    constructor(){

    }
}
window.addEventListener("DOMContentLoaded", function(){
    
    console.log("Hello 2");
    scene = document.querySelector("a-scene");
    box = document.querySelector("#car");
    box.r = 0;
    box.g = 0;
    box.b = 0;
    box.x = 0;
    box.movex = 0.1;
    console.log(box);
    animation();
})
function animation(){
    box.setAttribute("color", `rgb(${box.r}, ${box.g}, ${box.b})`)
    box.setAttribute("position", `${box.x}, 0, 0)`)
    if(box.x > 20){
        box.x = -20;
    }
    else{
        box.x += box.movex;
    }
    window.requestAnimationFrame(animation);
}

function init(){
    console.log("Hello");
}