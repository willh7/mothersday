function balloon() {
	this.line = random(width);
	this.size = random(40, 100);
	this.y = random(-200, -5*this.size/3 - 40);
	this.rand = random();
	this.x = this.line + sin(this.rand*this.y);
	this.c = {
		r: random(120,255),
		b: random(120,255),
		g: random(120,255)
	};
	this.speed = random(1.2,2.6);

	this.show = function() {

		noStroke();
		fill(this.c.r, this.c.b, this.c.g);
		circle(this.x, this.y, this.size);
		arc(this.x,this.y+(7*this.size/8), 3*this.size/2, 3*this.size/2, 20.875*PI/16, 27.125*PI/16);
		arc(this.x,this.y+(7*this.size/8), this.size/6, this.size/6, 4.875*PI/16, 11.125*PI/16);
	}

	this.update = function() {
		this.y = this.y + this.speed;
		this.x = this.line + this.size/4*sin((1/(6*PI))*this.rand*this.y);
	}
}