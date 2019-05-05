var a = 0;

function setup() {
  createCanvas(400, 400);
  background(255, 0, 0);
  fill(0, 0, 0);
  noStroke();
  smooth();
}
function draw() {
  background(255, 80, 20);

  var x = map(sin(a), -1, 1, 300, 400);

  ellipse(x, 200, 30, 30);
  
  a = a + 0.03;
}
