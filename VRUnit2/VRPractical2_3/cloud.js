class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let cloud = document.createElement("a-sphere");
    let X = rnd(5, 10);
    let Z = rnd(5, 10);
    let rotation = rnd(0, 360);
    cloud.setAttribute("scale", `${X} 1 ${Z}`);
    cloud.setAttribute("color", "white");
    cloud.setAttribute("position", `${x}, 30, ${z}`);
    cloud.setAttribute("rotation", `0, ${rotation}, 0`);
    this.obj.append(cloud);
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj)
  }
}