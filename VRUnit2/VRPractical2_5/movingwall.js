class MovingWall{
  constructor(x,z){
    this.x = x;
    this.z = z;
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","white");
    this.obj.setAttribute("position",{x:x,y:0,z:z});
    scene.append(this.obj);
  }
  slide(){
    if(this.da > -1){
      this.da-=1
    }
    if(this.da <= -1){
     this.a += this.da;
    }
  }
}