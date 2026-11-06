let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  let rocket = new Rocket(1, 1, 1);

  loop();
})

function loop(){

  
  window.requestAnimationFrame( loop );
}
