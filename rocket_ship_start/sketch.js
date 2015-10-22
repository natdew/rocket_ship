var backgroundImage;
var rocketImage;
var platformSmokeImage;
var smokeImage;

function preload() {
	backgroundImage = loadImage("images/Background.jpg");
	rocketImage = loadImage("images/rocket.png");
	platformSmokeImage = loadImage("images/platform_smoke.png")
	smokeImage = loadImage("images/smoke.png")
}

function setup() {
	createCanvas(800, 600);
}

function draw() {

	image(backgroundImage, 0, 0);
	var rocketY = 320
	if (mouseIsPressed) {
		rocketY = mouseY;
		if (rocketY > 320){
			rocketY = 320;
		}
	}

if (mouseIsPressed) {
	image(smokeImage, 420, 180)
	image(platformSmokeImage, 390, 420);

}
fill(255, 0, 0);
rectMode(CORNERS);
noStroke();
fill(218, 227, 211);
if (rocket Y > 100) {
rect(300, 180, 600, rocketY + 100)
}
image(rocketImage, 420, rocketY)

}
