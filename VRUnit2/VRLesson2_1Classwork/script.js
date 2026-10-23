window.addEventListener("DOMContentLoaded",function() {
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
  let scene = document.querySelector("a-scene");

  //Challenge 2: Create a variable for <a-dodecahedron> and create it.
  let dodecahedron = document.createElement("a-dodecahedron");
  
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color
  dodecahedron.setAttribute("position", "0 3 -3");
  dodecahedron.setAttribute("radius", 3);
  dodecahedron.setAttribute("color", "cyan");

  //Challenge 4: Add the <a-dodecahedron> to the scene
  scene.append(dodecahedron);

  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  */
  function RandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  for(let A=0; A<5; A++){
    let dodecahedron = document.createElement("a-dodecahedron");
    scene.append(dodecahedron);
    dodecahedron.setAttribute("position", {x: RandInt(-10, 10), y: RandInt(0, 10), z: RandInt(-10, 10),});
    let R = RandInt(1,255);
    let G = RandInt(1,255);
    let B = RandInt(1,255);
    dodecahedron.setAttribute("color", `rgb(${R}, ${G}, ${B})`);
  }

})