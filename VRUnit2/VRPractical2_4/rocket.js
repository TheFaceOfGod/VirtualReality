class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.2;

    this.obj = document.createElement("a-entity");
    
    let tip = document.createElement("a-cone");
    tip.setAttribute("color","#689669");
    tip.setAttribute("position","0 3 0");
    tip.setAttribute("height","2");
    tip.setAttribute("radius-bottom","1");
    tip.setAttribute("src", "#metal")
    this.obj.append(tip);
  
    let base = document.createElement("a-cylinder");
    base.setAttribute("position","0 0 0");
    base.setAttribute("color","#689669");
    base.setAttribute("height","4");
    base.setAttribute("radius","1");
    base.setAttribute("src", "#metal")
    this.obj.append(base);

    let symbol = document.createElement("a-cylinder");
    symbol.setAttribute("position","0 0 0");
    symbol.setAttribute("rotation","0 0 90");
    symbol.setAttribute("radius", 0.5)
    symbol.setAttribute("height", 2)
    symbol.setAttribute("src", "#rad")
    this.obj.append(symbol);

    let smoke = document.createElement("a-sphere");
    smoke.setAttribute("position","0 -2 0");
    smoke.setAttribute("color","white");
    smoke.setAttribute("radius","0.5");
    this.obj.append(smoke);

    let smoke2 = document.createElement("a-sphere");
    smoke2.setAttribute("position","0 -2.5 0");
    smoke2.setAttribute("color","white");
    smoke2.setAttribute("radius","0.3");
    this.obj.append(smoke2);

    let smoke3 = document.createElement("a-sphere");
    smoke3.setAttribute("position","0 -2.75 0");
    smoke3.setAttribute("color","white");
    smoke3.setAttribute("radius","0.2");
    this.obj.append(smoke3);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj)
  }

  launch(){
    this.dy = this.dy*1.005
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})

    
  }
}