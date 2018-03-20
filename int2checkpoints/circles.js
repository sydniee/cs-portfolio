/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos=0;
var yPos=0;
var weight=2;
 

draw = function() {
   
    ellipse(xPos,yPos,30,30);
    stroke(57,0,214);
    strokeWeight(3);
    fill(0,210,247);
    xPos =xPos + 20
    yPos =yPos +20
    
    
    ellipse(height-xPos,yPos,30,30);
    stroke(57,0,214);
    strokeWeight(weight);
    fill(0,602,247);
    xPos =xPos + 20
    yPos =yPos +20
   
   
    ellipse (xPos,200,30,30);
    stroke(57,0,214);
    strokeWeight(3);
    fill(450,210,247);
    
    ellipse(200,yPos,30,30);
    stroke(153,0,407);
    strokeWeight(weight);
    fill(204,204,255);

    
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
