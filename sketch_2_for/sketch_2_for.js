function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  noStroke()
    
  for (var i = 0; i <= width; i+= 20 ){
    for (var e = 0; e<= height; e+= 20) {
      
    fill(255)
    ellipse(i,e,10,10)  
    }
  }
}
