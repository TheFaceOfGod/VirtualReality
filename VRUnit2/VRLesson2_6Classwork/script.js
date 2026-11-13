let scene;
let mech;
let mecharray = [];
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
  for(let i = 0; i<50; i++){
    let x = rnd(-50, 50);
    let z = rnd(-50, 50);
    let mechtemp = new Mech(x, 13, z);
    mecharray.push(mechtemp);
  }
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
