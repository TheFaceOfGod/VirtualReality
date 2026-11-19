/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let maze = [
  "x-xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x-----z-------x------xxxx-x--x",
  "xxxxx-xxx-x-x-x--xxx--x-x-z--x",
  "x---x-x---x---xx---xx-----xx-x",
  "x---x-xxxxx-x--xx--x--xxx----x",
  "x-xxx---x-x-x-----xxx-x-xx-xxx",
  "x-x-xxx---x-xzx-x-----x----x-x",
  "x-----z-x-x-----x-x-x---xx-x-x",
  "x-xxx-xxxzx-x-xxx-x-xx---x---x",
  "x-x-x-x----x---------x-x-xxx-x",
  "x-x---xxxzxx-xx-xx-x-z-x---xxx",
  "x-x-x---x-----x-x--x-x-xxx---x",
  "x-z-xxx-xxx-xxx-xx-x-x--x-xx-x",
  "x-x---z-----x----x-x-xx---x--x",
  "xxxxxxxxxxxxx----xxxxxxxxxxxxx",
  "xxxxxxxxxxxxx----xxxxxxxxxxxxx",
  "xx---x------x----x---x---xxxxx",
  "xx-xxxxx-xxxxx-xxx-xzxxx-z---x",
  "xx-x-x-x-----x-x---x--x--x-xzx",
  "x----z---xxx---xxx-x-----x-x-x",
  "x-xxxxxx---x-x-x-x---x-x---x-x",
  "x-x----xx-xx-xzx-xxzxx-xzxxx-x",
  "x---xx--z--x-----x-------x---x",
  "x-x--xx-xxxx-xxxzxx-xxxxxx-zzx",
  "xzxx--x----xxx-x--x---x------x",
  "x----xx-xxxx-x-x--xxx-x-xxzxxx",
  "x-xx-x--x--x-x--x---x--------x",
  "x--xxx-xx-xx-x-xxzx-xxxxxx-x-x",
  "x--z----x----x----x---x----x-x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxx-x",
];
let distracting = []
/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    let row = maze[r];
    let cols = row.split("");
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,0.5,r)
      }
      else if(cols[c] == "w"){
        new SpikeTrap(c,0.5,r);
      }
      else if(cols[c] == "z"){
        let wall = new MovingWall(c,r);
        distracting.push(wall);
      }
    }
  }
})
