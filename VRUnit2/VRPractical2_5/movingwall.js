class MovingWall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.01;
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","white");
    let guesser = rnd(1,100);
    if(guesser > 50){
      this.y = 0.9;
    }
    else if(guesser <= 50){
      this.y = -1;
    }
    this.obj.setAttribute("position",{x:x,y:this.y,z:z});
    scene.append(this.obj);
  }
  slide(){
    console.log(this.y);
    this.y += this.dy;
    if(this.y >= 1 || this.y <= -1){
      this.dy = -this.dy;
      this.movecheck();
    }
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

  }
  movecheck(){
    let yesmove = 1;
    let check = rnd(1,10)
    if(check == yesmove){
      slide();
    }
    else{
      setTimeout(this.movecheck, 5000)      
    }
  }
}