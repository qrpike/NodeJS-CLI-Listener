// Require the Module:
var CLI = require('../cli.js');


// What you want to say on starting the CLI:
var welcomeMessage = "Howdy there.. welcome to the CLI";

// Available calls the user can make:
var availableCalls = {
	// When we enter 'do something' and hit enter, call this:
	'do something'	: function( callback ){
		console.log('Hey! We gotta do something now!');
		// When we are done, call the callback to continue the prompt:
		callback();
	}
};


// Kick it off:
var _c = new CLI('cli-listener-demo', welcomeMessage, availableCalls);