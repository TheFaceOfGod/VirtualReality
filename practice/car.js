class Car{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        let Ry = rnd(1, 360);
        this.obj = car.cloneNode(true);
        this.obj.setAttribute("position", {x:x, y:y, z:z});
        this.obj.setAttribute("rotation", {x:0, y:0, z:0});
        scene.append(this.obj);
    }
    
}