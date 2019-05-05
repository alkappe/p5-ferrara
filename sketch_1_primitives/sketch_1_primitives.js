function setup() {
  // Canvas size 400px x 400px
  createCanvas(400, 400);
  background(0);
  
  square(100, 200, 100, 100)
  
  square(10, 50, 100, 100, 20)
  
  rect(300, 20, 55, 55, 20, 15, 10, 50);
  
  ellipseMode(RADIUS); // Set ellipseMode to RADIUS
  fill(255); // Set fill to white
  ellipse(50, 50, 30, 30); // Draw white ellipse using RADIUS mode
  
  ellipseMode(CENTER); // Set ellipseMode to CENTER
  fill(100); // Set fill to gray
  ellipse(50, 50, 30, 30); // Draw gray ellipse using CENTER
  
}
