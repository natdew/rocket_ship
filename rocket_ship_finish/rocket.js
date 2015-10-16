// rocket.js
//
// draws a scene with a rocket blasting off
// click and drag to move the rocket

var backgroundImg;
var rocketImg;
var smokeImage;
var platformSmokeImage;
var largeCloudImage;
var smallCloudImage;

var largeCloudX = -100;
var smallCloudX = 600;

function preload() {
	backgroundImg = loadImage("images/background.jpg");
	rocketImg = loadImage("images/rocket.png");
	smokeImage = loadImage("images/smoke.png");
	platformSmokeImage = loadImage("images/platform_smoke.png");
	largeCloudImage = loadImage("images/large_cloud.png");
	smallCloudImage = loadImage("images/small_cloud.png");
}

function setup() {
	createCanvas(800, 600);
}

function draw() {
	image(backgroundImg, 0, 0);

	// animate the clouds
	largeCloudX += 0.8;
	if (largeCloudX > 800) {
		largeCloudX = -200;
	}
	image(largeCloudImage, largeCloudX, 100);
	
	smallCloudX += 0.5;
	if (smallCloudX > 800) {
		smallCloudX = -200;
	}
	image(smallCloudImage, smallCloudX, 50);




	var rocketY = 315;
	var rocketX = 430;
	var platformHeight = 468;

	if (mouseIsPressed) {
		rocketX = rocketX + random(-3, 3);
		rocketY = mouseY;

		// don't draw the rocket too low
		if (rocketY > 315) {
			rocketY = 315;
		}


		// figure out where we want smoke
		var smokeBottom = platformHeight; // bottom on the platform
		var smokeTop = rocketY + 100; // top near bottom of rocket

		if (smokeTop < smokeBottom - smokeImage.height) { // constrain the height to the height of the image
			smokeTop = smokeBottom - smokeImage.height;
		}

		var smokeHeight = smokeBottom - smokeTop;

		// use the extended form of image, so we can specify a rectangular part of the image to use
		image(smokeImage, 
			0, smokeImage.height - smokeHeight, smokeImage.width, smokeHeight, // what part to use
			435, smokeTop, smokeImage.width, smokeHeight // where to draw that part on screen
			);


		image(platformSmokeImage, 400, 430);
	}


	// draw the rocket on top	
	image(rocketImg, rocketX, rocketY);
}
