class Target{
    constructor(x, y, z){
        this.a = 0;
        this.da = rnd(0,500);
        this.x = x;
        this.y = y;
        this.z = z;
        this.obj = target.cloneNode(true);
        this.obj.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.obj);
    }
    fall(){
        if(this.da > -1){
            this.da-=1
        }
        if(this.da <= -1){
            this.a += this.da;
        }
        this.obj.setAttribute("rotation",{x:this.a, y:0, z: 0});
        if(this.a < -90){
            this.obj.setAttribute("rotation",{x:-90, y:0, z: 0});;
        }
    }
}