var balloons;
var fireworks;
var b;
var f;
var start;
function setup() {
	createCanvas(windowWidth, windowHeight);
	balloons = [new balloon()];
	fireworks = [];
	b = true;
	f = false;
}

function draw() {
	background(51);
	if(b) {
		if(frameCount%8 == 0) {
			balloons.push(new balloon());
		}
		if(frameCount == 1000) {
			b = false;
		}
		for(var i = 0; i < balloons.length; i++) {
			balloons[i].update();
			balloons[i].show();
			if(balloons[i].y - balloons[i].size >= height) {
				balloons.splice(i,1);
				i--;
			}
		}
	}
	if(f) {
		if(frameCount%30 == 0) {
			fireworks.push(new firework());
		}
		for(var i = 0; i < fireworks.length; i++) {
			fireworks[i].update();
			if(fireworks[i].particles == null) {
				fireworks.splice(i, 1);
				i--;
			} else {
				fireworks[i].show();
			}
			
		}
		for(var i = 0; i < balloons.length; i++) {
			balloons[i].update();
			balloons[i].show();
			if(balloons[i].y - balloons[i].size >= height) {
				balloons.splice(i,1);
				i--;
			}
		}

		if(frameCount - start >= 400) {
			textAlign(CENTER, CENTER);
			textSize(width/10);
			if(frameCount -start < 654) {
				fill(255,0,0, frameCount -start - 400);
			}
			else {
				fill(255,0,0);
			}
			text("Happy Mothers Day!", width/2, height/2);
		}
		if(frameCount - start >= 654) {
			textAlign(RIGHT, BOTTOM);
			textSize(width/30);
			if(frameCount -start < 654 + 254) {
				fill(255,0,0, frameCount -start - 654);
			}
			else {
				fill(255,0,0);
			}
			text("from Will ", width, height);
		}
	}
	if(!b && !f) {
		for(var i = 0; i < balloons.length; i++) {
			balloons[i].update();
			balloons[i].show();
			if(balloons[i].y - balloons[i].size >= height) {
				balloons.splice(i,1);
				i--;
			}
		}
		if(balloons.length == 30) {
			f = true;
			start = frameCount;
		}
		for(var i = 0; i < fireworks.length; i++) {
			fireworks[i].update();
			if(fireworks[i].particles == null) {
				fireworks.splice(i, 1);
				i--;
			} else {
				fireworks[i].show();
			}
			
		}
	}
}