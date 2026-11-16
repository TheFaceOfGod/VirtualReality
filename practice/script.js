let scene;
let box;
let cararray = [];
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  box = document.getElementById("BOX");
  loop();
})
function loop(){
  box.RGB();

  window.requestAnimationFrame( loop );
}
