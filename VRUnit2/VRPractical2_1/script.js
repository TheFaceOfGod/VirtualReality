let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }
  
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
  for(let i = 0; i < 75; i++){
    let x = rnd(-30,30);
    let z = rnd(-30,30);
    createCloud(x, 30, z);
  }

   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
   for(let i = 0; i < 10; i++){
    let x = rnd(-30,30);
    let z = rnd(-30,30);
    createHouse(x, 0, z);
  }
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x, y, z){
  let cloud = document.createElement("a-sphere");
  let X = rnd(1, 3);
  let Z = rnd(1, 3);
  let rotation = rnd(0, 360);
  cloud.setAttribute("scale", `${X} 1 ${Z}`);
  cloud.setAttribute("color", "white");
  cloud.setAttribute("position", `${x}, 30, ${z}`);
  cloud.setAttribute("rotation", `0, ${rotation}, 0`);
  scene.append(cloud);
}

/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x, y, z){
  let house = document.createElement("a-entity");
  let rotation = rnd(0, 360);
  let base = document.createElement("a-box");
  base.setAttribute("color", "cyan");
  base.setAttribute("position", `${x} 1 ${z}`);
  base.setAttribute("width", "5");
  base.setAttribute("height", "3");
  base.setAttribute("depth", "5");
  house.append(base);
  let roof = document.createElement("a-cylinder");
  roof.setAttribute("color", "brown");
  roof.setAttribute("position", `${x} 3 ${z}`);
  roof.setAttribute("radius", "1");
  roof.setAttribute("segments-radial", 3);
  roof.setAttribute("rotation", "270, 0, 90");
  roof.setAttribute("height", "5")
  roof.setAttribute("scale", `3.25, 1, 1`);
  house.append(roof);
  house.setAttribute("rotation", `0, ${rotation}, 0`);
  scene.append(house);
}



function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



