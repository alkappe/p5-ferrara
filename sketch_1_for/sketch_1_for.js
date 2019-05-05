function setup() {
  createCanvas(400, 400);
  background(255, 255, 255)
}


function draw() {
  for(var e=0; e<width; e= e + 20) {
    //e = al mio moltiplicatore
    for( var i=0; i<height; i= i + 20) {
      fill(255, 0, 0);
      ellipse(e, i, 10);
      fill(0, 0, 0);
      stroke(255, 255, 255)
      ellipse(e, i, 5);
    }
  }

}
