class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;

    this.obj = document.createElement("a-entity");
    
    let tip = document.createElement("a-cone");
    tip.setAttribute("color","red");
    tip.setAttribute("position","0 1 0");
    tip.setAttribute("height","0.25");
    this.obj.append(tip);
  
    let base = document.createElement("a-cylinder");
    base.setAttribute("position","0 0 0");
    base.setAttribute("color","gray");
    base.setAttribute("height","1");
    base.setAttribute("radius","0.25");
    this.obj.append(base);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if(this.y > 30){
      this.y = 0;
    }
  }
}