class Box{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.R = 0;
        this.G = 0;
        this.B = 0;
    }
    RGB(){
    if(this.R < 255){
      this.R += 0.1;
      this.obj.setAttribute("color",`rgb(${this.R}, 0, 0)`);
      this.dy = this.dy*-1;
    }
  }
}