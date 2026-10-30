class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let rotation = rnd(0, 360);
    let base = document.createElement("a-box");
    base.setAttribute("color", "cyan");
    base.setAttribute("position", `${x} 1 ${z}`);
    base.setAttribute("width", "5");
    base.setAttribute("height", "3");
    base.setAttribute("depth", "5");
    this.obj.append(base);
    let roof = document.createElement("a-cylinder");
    roof.setAttribute("color", "brown");
    roof.setAttribute("position", `${x} 3 ${z}`);
    roof.setAttribute("radius", "1");
    roof.setAttribute("segments-radial", 3);
    roof.setAttribute("rotation", "270, 0, 90");
    roof.setAttribute("height", "5")
    roof.setAttribute("scale", `3.25, 1, 1`);
    this.obj.append(roof);
    this.obj.setAttribute("rotation", `0, ${rotation}, 0`);
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj)
  }
}