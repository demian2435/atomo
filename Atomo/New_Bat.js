var attractor1;
var attractor2;
var attractor3;
var particles = [];


function setup() {
	//frameRate(10);
  createCanvas(800,800);
  for(var i = 0; i < 1; i++){particles[i] = new Particle(400,10);}
  attractor1 = createVector(400,400);

    background(51);
}

function draw() {


  // stroke(255);
  // strokeWeight(2);
  // point(attractor1.x,attractor1.y);

  
   for(var i = 0; i < particles.length; i++){
	particles[i].attracted(attractor1);
  particles[i].update();
   particles[i].show();}
}