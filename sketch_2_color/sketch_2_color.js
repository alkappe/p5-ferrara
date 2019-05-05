function setup() {
  createCanvas(400, 400);
  noStroke();
  var c = color(0, 126, 255, 102);
  
  colorMode(HSL);
  fill(c);
  ellipse(50, 50, 50, 50);
  var value = lightness(c); // Sets 'value' to 102
  fill(value);
  ellipse(100, 50, 50, 50);

}
