/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1500,1500);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(255,239,250);
var offset = -200;

frameRate(10);

draw = function() {
   background(255,239,250);
   for (var i = offset; i < width ; i += 40) {
      for (var j = 0; j < height; j+=40) {
            var size = random(40);
            fill(random(100,150),random(244),242);
            ellipse(i,j,size,size);  
      }
   }
   offset = offset + 10;
   
   if( offset >= 0 ) {
      offset = -200;
   }
   
   
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
