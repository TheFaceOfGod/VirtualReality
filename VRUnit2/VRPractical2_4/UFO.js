class UFO{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;

    this.Rx = rnd(1,15);
    this.Ry = rnd(0,360);
    this.Rz = rnd(1,15);
    this.Rdy = rnd(1,3);

    this.obj = document.createElement("a-entity");
    
    let dome = document.createElement("a-sphere");
    dome.setAttribute("position","0 0.8 0");
    dome.setAttribute("color","#8eeb54");
    dome.setAttribute("scale","1.5 1.5 1.5");
    this.obj.append(dome);
  
    let disk = document.createElement("a-sphere");
    disk.setAttribute("position","0 0 0");
    disk.setAttribute("color","gray");
    disk.setAttribute("scale","4 0.75 4");
    disk.setAttribute("metalness","0.1");
    disk.setAttribute("roughness","0.1");
    this.obj.append(disk);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj)
  }

  land(){
    this.y -= this.dy;
    this.Ry += this.Rdy
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    this.obj.setAttribute("rotation",{x:this.Rx, y:this.Ry, z:this.Rz})
    if(this.y < 1.1){
      this.y = 1;
      this.Rdy = 0;
    }
  }
}