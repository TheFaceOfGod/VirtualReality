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
    box.r = 0;
    box.g = 1;
    box.b = 1;

    console.log(box);
    animation();
})
function animation(){
    window.requestAnimationFrame(animation);
    if(box.r >= 255){
        for(n=0; n<255; n++){
            box.r -= 1;
        }
    }
    else if(box.r <= 0){
        for(n=0; n<255; n++){
            box.r += 1;
        }
    }
    console.log(box.r);

    if(box.g >= 255){
        for(n=0; n<255; n++){
            box.g -= 1;
        }
    }
    else if(box.g <= 0){
        for(n=0; n<255; n++){
            box.g += 1;
        }
    }
    console.log(box.g);

    if(box.b >= 255){
        for(n=0; n<255; n++){
            box.b -= 1;
        }
    }
    else if(box.b <= 0){
        for(n=0; n<255; n++){
            box.b += 1;
        }
    }
    console.log(box.b);

    box.setAttribute("color", `rgb(${box.r}, ${box.g}, ${box.b})`)
}

function init(){
    console.log("Hello");
}