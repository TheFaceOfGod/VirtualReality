let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets = [];
let ufos = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  for(let i = 0; i<200; i++){
    let x = rnd(-50, 50);
    let y = rnd(-50, -10);
    let z = rnd(-50, 50);
    let rocket = new Rocket(x, y, z);
    rockets.push(rocket);
  }
  for(let i = 0; i<25; i++){
    let x = rnd(-50, 50);
    let y = rnd(40, 60);
    let z = rnd(-50, 50);
    let ufo = new UFO(x, y, z);
    ufos.push(ufo);
  }
  loop();
})

function loop(){
  for(let i = 0; i < rockets.length; i++){
    let rocket = rockets[i];
    rocket.launch();
  }
  for(let i = 0; i < ufos.length; i++){
    let ufo = ufos[i];
    ufo.land();
  }
  window.requestAnimationFrame( loop );
}
