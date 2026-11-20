class Block{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","gray");
    this.obj.setAttribute("position",{x:x,y:rnd(1,2),z:z});
    scene.append(this.obj);
  }

}