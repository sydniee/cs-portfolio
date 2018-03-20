/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1500,1500);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
var numCircles = 0;

draw = function() {
    
    ellipse(mouseX,mouseY,30,30);
    numCircles++
    

     if(numCircles > 510){
         numCircles = 0
     }
        //aqua circles 
     else if(numCircles > 500){
        fill(204,255,255);
        stroke(0,255,255);         
     }
     
     //pink circles
     
     else if(numCircles > 400){
        fill(255,204,255);
        stroke(255,102,255);
     }
     
     //yellow circles
     
     else if(numCircles > 300){
          fill(255,255,204);
          stroke(255,255,0);
          
         // green circles
      }
      else if (numCircles > 200){
            fill(204,255,153);
            stroke(102,255,152);
      }
      
      // purple circles
      
        else if(numCircles > 100){
            fill(204,204,255);
            stroke(204,153,255);
        }

        
      

   
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
