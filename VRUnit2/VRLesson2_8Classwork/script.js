let target;
let targets = [];
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
window.addEventListener("DOMContentLoaded",function(){
  scene = document.querySelector("a-scene");
  target = document.querySelector("#ENTITY");
  for(let i = 0; i<5; i++){
    let x = rnd(-7, 7);
    let z = rnd(-7, 0);
    let targetTEMP = new Target(x, -0, z);
    targets.push(targetTEMP);
  }
  target.a = 0;
  target.da = -1;



  loop();
})

function loop(){
  for(let i = 0; i<targets.length; i++){
    let t = targets[i];
    t.fall();
  }
  target.a += target.da;
  target.setAttribute("rotation",{x:target.a, y:0, z: 0});
  if(target.a < -90){
    target.da = 0;
  }
  window.requestAnimationFrame(loop);
}