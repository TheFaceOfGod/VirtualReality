class Dude{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    //Challenge 1: Add delta variables in order to make the dude walk forward on the z axis and jump up and down on the y axis.
    this.dy = rnd(1, 4)/100;
    this.dz = rnd(2,50)/10;
    this.obj = dudeTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);
  }
  jump(){
    //Challenge 2: Add the accumulators to modify the y and z variables
    this.y += this.dy;
    this.z += this.dz;
    //Challenge 3: Add the decision in order to alternate the delta on the y axis when the dude reaches less then 1 or greater than 2
    if(this.y > 2){
      this.dy = -this.dy;
    }
    if(this.y < 1){
      this.dy = -this.dy;
    }
    if(this.z > 50){
      this.dz = -this.dz;
      this.obj.setAttribute("rotation",{x:0,y:180,z:0});
    }
    if(this.z < -50){
      this.dz = -this.dz;
      this.obj.setAttribute("rotation",{x:0,y:0,z:0});
    }
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
}