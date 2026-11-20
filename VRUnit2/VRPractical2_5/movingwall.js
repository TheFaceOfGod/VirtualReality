class MovingWall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","white");
    let guesser = rnd(1,100);
    if(guesser > 50){
      this.obj.setAttribute("position",{x:x,y:1,z:z});
    }
    else if(guesser <= 50){
      this.obj.setAttribute("position",{x:x,y:0,z:z});
    }
    scene.append(this.obj);
  }
  slide(){
    if(this.y >= 1){
      this.y -= this.dy;
    }
    else if(this.y <= 0){
      this.y += this.dy;
    }
  }
}