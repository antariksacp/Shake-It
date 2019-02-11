/*
 * Shake when Late by Carisa Antariksa
 *
 * Ubiquitous Computing - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 *
 * Allows you to send data to Adafruit IO + IFTTT to Slack
 *
 Creation & Computation - Kate Hartman
 + ColorShake Example
 *
 */



var AIO_KEY = "6921ada243144dc5a400034410a71dac";//get this from your account
var channelGroup = "ubiComp";
// var channel1 = "position1";
// var channel2 = "position2";
// var channel3 = "message";
var channel4 = "colors";

let value = 0;

function setup() {
	createCanvas(2000, 2000);

	textSize(80);
  text("SHAKE WHEN LATE", 0, 0, 600, 400);
	// var testButton
	// testButton = createButton('Click me');
	// testButton.position(windowWidth/2, windowHeight/2);
	// testButton.mousePressed(sendData);
}


function draw() {
	// fill(value);
  // rect(100, 100, 500, 500, 50);
}

function deviceShaken(){
	// background(random(0, 255), random(0, 255), random(0, 255));
	background(value, value, value);
	value = value + 20;
	if (value > 100){
		// value = 0;
		sendData();
		}
}

function sendData() {

        var url = ("https://io.adafruit.com/api/v1/groups/"+channelGroup+"/send.json?x-aio-key=" + AIO_KEY + "&"+channel4+"=" + value);
        var oReq = new XMLHttpRequest()
        oReq.addEventListener("load", reqListener)
        oReq.open("POST", url)
        oReq.send()

}

function reqListener(inputdata) {
			console.log(inputdata);
	}
