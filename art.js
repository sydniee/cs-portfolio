/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
   with(processing) {
      size(1350, 700);
      background(117, 186, 109);
      // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


      var offset = 200;
      var numWatermelons = 0;

      drawWatermelon = function(x, y) {
         // outside of watermelon
         fill(70, 242, 147);
         ellipse(x, y, 150, 150);

         //inside of watermelon
         fill(226, 63, 88);
         stroke(255);
         strokeWeight(3);
         ellipse(x, y, 125, 125);

         //watermelon seeds randomly appear
         for (var i = 0; i < random(8, 20); i += 1) {
            stroke(0);
            fill(0, 0, 0);
            ellipse(x + random(-40, 40), y + random(-40, 40), 5, 5);
         }

      };
      // interactive part
      mouseClicked = function() {
         drawWatermelon(mouseX, mouseY);
         numWatermelons++

         //reset background
         if (numWatermelons > 14) {
            background()
            numWatermelons = 0;
         }
      };


      draw = function() {




      };
      // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
   }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
