let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let Tx = rnd(-50,50);
    let Tz = rnd(-50,50);
    let Cx = rnd(-50,50);
    let Cz = rnd(-50,50);
    let tree = new Tree(Tx, 0, Tz);
    let cloud = new Cloud(Cx, 50, Cz);
  }
  for(let i = 0; i < 20; i++){
    let Hx = rnd(-50,50);
    let Hz = rnd(-50,50);
    let house = new House(Hx, 0, Hz);
  }

})
