window.addEventListener("DOMContentLoaded", function(){
    
    console.log("Hello 2");
    let scene = document.querySelector("a-scene");
    let box = document.createElement("a-box");

    scene.append(box);
    box.setAttribute("height", 2);
    box.setAttribute("position", "0 3 2");
    box.setAttribute("color", "green");
    
})

function init(){
    console.log("Hello");
}