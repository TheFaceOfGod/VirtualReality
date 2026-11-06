class UFO{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;

    this.obj = document.createElement("a-entity");
    
    let dome = document.createElement("a-sphere");
    dome.setAttribute("position","0 1 0");
    dome.setAttribute("color","#8eeb54");
    dome.setAttribute("scale","1 1 1");
    this.obj.append(dome);
  
    let disk = document.createElement("a-sphere");
    disk.setAttribute("position","0 0 0");
    disk.setAttribute("color","gray");
    disk.setAttribute("scale","4 1 4");
    this.obj.append(disk);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj)
  }

  land(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if(this.y < 1.1){
      this.y = 1;
    }
  }
}