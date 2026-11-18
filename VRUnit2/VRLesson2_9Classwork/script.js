let maze = [
  "xxxxxxxxxxxxxxxxxxxxxxxx",
  "x----T------o----T--o--x",
  "xo------o--T------o--T-x",
  "x-T-o------o-----------x",
  "x---T---------T---o----x",
  "x------o------o-------Tx",
  "x--o-----o-----o-T--o--x",
  "xo------T----T---------x",
  "x-----o----------T----Tx",
  "x--T-------o-------o---x",
  "x---o---T-------o--T---x",
  "xxxxxxxxxxxxxxxxxxxxxxxx",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,0.5,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,0,r)
      }
    }

  }

})