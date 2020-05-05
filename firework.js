function firework() {
	this.rocket = new rocket();
	this.up = true
	this.particles = [];
	this.start = 0;
	this.size = random(.4,.6);
	this.speed = random(.003, .005);
	this.color = random(190, 255);
	this.c = floor(random(0,4.5));

	this.show = function() {
		if(this.up) {
			this.rocket.show();
		} else {
			for(var i = 0; i < this.particles.length; i++) {
				this.particles[i].show();
			}
		}
	}
	this.update = function() {
		if(this.up) {
			this.rocket.update();
			if(this.rocket.vel.y >= 0) {
				for(var i = 0; i < 100; i++) {

					this.particles.push(new particle(i*2*PI/100, this.rocket.x, this.rocket.y, this.size, this.speed, this.color, this.c));
				}
				this.up = false;
			}

		} else {
			for(var i = 0; i < this.particles.length; i++) {
				this.particles[i].update();
			}
			if(this.particles[27].speed <= 0) {
				this.particles = null;
			}
		}
	}
}


function rocket() {
	this.x = random(width/4, 3*width/4);
	this.y = height;
	this.r = 2.5;
	this.vel = {
		x: 0,
		y: random(-11,-7)
	};
	this.acc = {
		x: random(-.01,.01),
		y: random(.08,.11)
	};

	this.show = function() {
		fill(255,255,255);
		noStroke();
		circle(this.x, this.y, this.r*2);
	}

	this.update = function() {
		this.vel.x += this.acc.x;
		this.vel.y += this.acc.y;
		this.x += this.vel.x;
		this.y += this.vel.y;
	}
}

function particle(t, x, y, s, f, c, d) {
	this.x = x;
	this.y = y;
	this.r = 2.5;
	this.dist = 0;
	this.theta = t;
	this.vel = (2*sin(this.theta)*sqrt(abs(cos(this.theta))))/(sin(this.theta) + 1.7) - 2.5*(sin(this.theta) - 1);
	this.speed = s;
	this.fast = f;
	this.color = {
		r: 0,
		g: 0,
		b: 0
	};
	if(d == 0) {
		this.color.g = c;
	}
	else if(d == 1) {
		this.color.b = c;
	}
	else {
		this.color.r = c;
	}

	this.show = function() {
		push();
			fill(this.color.r, this.color.b, this.color.g);
			noStroke();
			translate(this.x, this.y);
			rotate(this.theta + PI);
			circle(this.vel*this.dist, 0, this.r);
		pop();
	}

	this.update = function() {
		this.speed -= this.fast;
		this.dist+= this.speed;
	}
}