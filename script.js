window.addEventListener('load', function() {
    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
            return;
        }
        var x = data.x; // the x coordinate of the gaze
        var y = data.y; // the y coordinate of the gaze
        // Here you can use x and y to control the cursor or do other interactions
    }).begin();
});
var prediction = webgazer.getCurrentPrediction();
if (prediction) {
	var x = prediction.x;
	var y = prediction.y;
}
	
// Assuming script.js is the starting point and WebGazer is already initialized

let lastBlinkTimestamp = 0;
const blinkThreshold = 1500; // Time in milliseconds to consider for double blink detection
let blinkCount = 0;

window.addEventListener('load', function() {
    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
            // Possible blink detected
            const now = Date.now();
            if (now - lastBlinkTimestamp < blinkThreshold) {
                // Increment blink count if this blink happened within the threshold of the last blink
                blinkCount++;
                if (blinkCount === 2) {
                    console.log("Double blink detected!");
                    // Reset blink count after a double blink is detected
                    blinkCount = 0;

                    // TODO: Trigger desired action here
                }
            } else {
                // Reset blink count if blinks are too far apart
                blinkCount = 1;
            }
            lastBlinkTimestamp = now;
        }
        else {
            // Gaze data is present, not considering this as a blink
        }
    }).begin();

    // Additional WebGazer setup or functionality
});
