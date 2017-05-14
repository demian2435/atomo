function Particle (x,y) {
  this.pos = createVector(x,y);
  this.prev = createVector(x,y);
  this.vel = p5.Vector.random2D();;
  this.acc = createVector();
  this.rgb = [255];
  
  this.update = function () {
    this.vel.add(this.acc);
	this.vel.limit(5);
    this.pos.add(this.vel);
	this.acc.mult(0);
  }
  
  this.show = function () {
    stroke(this.rgb);
    strokeWeight(2);
    line(this.pos.x,this.pos.y,this.prev.x,this.prev.y);
	
	this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
	
  }
  
  this.attracted = function (target) {
    var force = p5.Vector.sub(target, this.pos);
    var dsquared = force.magSq();
    dsquared = constrain(dsquared,400,500);
    var G = 10;
    var strength = G / dsquared;
    force.setMag(strength);
    this.acc.add(force);
  }
}