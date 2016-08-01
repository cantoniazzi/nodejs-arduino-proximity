var five = require("johnny-five");
var Twit = require('./twitter_bot.js');

var board = new five.Board();

board.on("ready", function() {
    var proximity = new five.Proximity({
        controller: "HCSR04",
        pin: 7
    });

    proximity.on("data", function() {
        var now = new Date();
        if (Twit.canIpost(now.getTime()) && (this.cm < 10)) {
            Twit.postTweet(this.cm);
            console.log("posted - distance " + this.cm);
        }
    });
});

