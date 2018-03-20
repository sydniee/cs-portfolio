/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1350,925);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var x = 200;
var y = 300;

drawCaterpillar = function (x,y){
    fill(207, 255, 96);
    ellipse(x, y, 200, 200);
    fill(255, 188, 234);
    ellipse(x + 200, y, 200, 200);
    fill(255, 248, 163);
    ellipse(x + 400, y, 200, 200);
    fill(255, 175, 163);
    ellipse( x + 600, y, 200, 200);
    fill(199, 163, 255);
    ellipse(x + 800, y, 200, 200);
    fill(184,206,242);
    ellipse(x - 25, y - 100, 35, 35);
    ellipse(x - 35, y - 120, 35, 35);
    ellipse(x - 45, y - 140, 35, 35);
    ellipse(x + 25, y - 100, 35, 35);
    ellipse(x + 35, y - 120, 35, 35);
    ellipse(x + 45, y - 140, 35, 35);
    
 
};

mouseClicked = function() {
    drawCaterpillar(mouseX, mouseY);
};




draw = function() {
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
