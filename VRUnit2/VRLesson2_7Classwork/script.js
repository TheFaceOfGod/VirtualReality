let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;
let dudes = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let i = 0; i<50; i++){
    let x = rnd(-50, 50);
    let z = rnd(-50, 50);
    let dudetemp = new Dude(x, 1, z);
    dudes.push(dudetemp);
  }
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for(let i = 0; i < dudes.length; i++){
    dudes[i].jump();
  }
  window.requestAnimationFrame( loop );
}