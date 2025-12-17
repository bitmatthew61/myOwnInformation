var diam1=100;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(6,6,20); //an RGB color for the canvas' background
  //circle
  stroke(255,255,255) // an RGB color for the circle's border
  fill(200,2,10,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/3,height/2,50,50); // center of canvas, 20px dia

  fill("#0006A1");
  ellipse(90,250,diam1,diam1);
  diam1=diam1-1;
  textSize(40);
  textFont("Helvetica");
  textStyle(BOLD);
  textAlign(CENTER);
  text("MISCELLANEOUS",200,90);
}

function mousePressed(){
    diam1=diam1-13;
}