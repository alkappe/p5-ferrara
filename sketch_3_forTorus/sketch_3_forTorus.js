function setup() {
  background(255, 255, 255);
  createCanvas(400, 400, WEBGL);
}


function draw() {
ellipse(0, 50, 33, 33); // Left circle

push(); // Start a new drawing state
strokeWeight(10);
fill(204, 153, 0);
translate(50, 0);
ellipse(0, 50, 33, 33); // Middle circle
pop(); // Restore original state

ellipse(100, 50, 33, 33); // Right circle

}
