function setup() {
  
  //canvas 500
  createCanvas(500,500);
  // Starts in the middle
  
  noStroke()
  
}

function draw() {
  
   fill(random(255),255,255,70);
   
   //size
  textSize(random(1, 25,60));
  
  //where center
  textAlign(CENTER);
  
  //style
  textStyle(NORMAL);
  
  text(int(random(20)), random(width), random(height));
  
  //if
    if (mouseIsPressed)
    background(random(255),random(255),random(255));

//

   
  
}