let scene, box;
window.addEventListener("DOMContentLoaded",function() {
    car = document.querySelector("#car");
    car.x = 0;
    CarAnimation();

    pokeball = document.querySelector("#pokemonball");
    pokeball.Rx = 0;
    PokeballAnimation();

    rocket = document.querySelector("#rocket");
    rocket.y = 1;
    RocketAnimation();
    
    dude = document.querySelector("#dude");
    dude.Sx = 1;
    dude.Sy = 1;
    dude.Sz = 1;
    DudeAnimation();

    sun = document.querySelector("#sun");
    sun.opacity = 0;
    SunAnimation();
})
function CarAnimation(){
    window.requestAnimationFrame(CarAnimation);
    car.x += 0.1;
    car.setAttribute("position", `${car.x}, 0, -8`);
}

function PokeballAnimation(){
    window.requestAnimationFrame(PokeballAnimation);
    pokeball.Rx -= 3;
    pokeball.setAttribute("rotation", `${pokeball.Rx}, 0, 0`);
}

function RocketAnimation(){
    window.requestAnimationFrame(RocketAnimation);
    rocket.y += 0.2;
    rocket.setAttribute("position", `3, ${rocket.y}, -4`)
}

function DudeAnimation(){
    window.requestAnimationFrame(DudeAnimation);
    dude.Sx += 0.01;
    dude.Sy += 0.01;
    dude.Sz += 0.01;
    dude.setAttribute("scale", `${dude.Sx}, ${dude.Sy}, ${dude.Sz}`);
}

function SunAnimation(){
    window.requestAnimationFrame(SunAnimation);
    sun.opacity += 0.005;
    sun.setAttribute("opacity", `${sun.opacity}`);
}