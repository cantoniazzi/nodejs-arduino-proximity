var Twit = require('twit');

module.exports = {
	
	lastPostDate : null,

	T : new Twit({
	    consumer_key:         '', // Your Consumer Key
	    consumer_secret:      '', // Your Consumer Secret
	    access_token:         '', // Your Access Token
	    access_token_secret:  '' // Your Access Token Secret
	}),

	postTweet : function(distance) {
	    this.T.post('statuses/update', { status: "Distance from my object is: " + distance + " cm" }, function(err, data, response) {
	        if(err) {
	          console.log("There was a problem tweeting the message.", err);
	        }
	    });
	    this.lastPostDate = new Date();
	}, 

	//tweet by first-time or (each 5 min and distance less than 10 cm) 
	canIpost : function(now) {
		if (!this.lastPostDate) 
			return true;
		return (now.getTime() - this.lastPostDate.getTime() > 3e5);
	}
};