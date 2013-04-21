NodeJS-CLI-Listener
===================

CLI listening prompt for NodeJS. Unlike other modules this is a live listening CLI interface. Similar to that of mysql I guess you could say. Currently being used in [Git-Server](https://github.com/qrpike/NodeJS-Git-Server)

## Example Usage:
========
To create a new CLI interface, here is a example snippet:

	var CLI = require('cli-listener');
	
	var welcomeMessage = "Howdy there.. welcome to the CLI";
	var availableCalls = {
		'do something'	: function( callback ){
			console.log('Hey! We gotta do something now!');
			callback();
		}
	};
	
	var _c = new CLI('cli-listener-demo', welcomeMessage, availableCalls);

Now when you run this now, you will see something like:

	Howdy there.. welcome to the CLI
	cli-listener-demo> 

If you enter `do something` and you should see something like this:

	Howdy there.. welcome to the CLI
	cli-listener-demo> do something
	Hey! We gotta do something now!
	cli-listener-demo> 

Also, there is a default `help` command that will list the possible commands we have given it.

	cli-listener-demo> help
	Possible Commands: 
	 do something
	cli-listener-demo> 

## Asking questions
========
You may want to ask the user for some input, you can do this by calling the `.ask` method

	_c.ask({ 'username':'What is the username?' }, function( err, response ){
		if(err) throw err;
		console.log('Your username is:',response.username);
	});

### Feel free to contribute to this project.
===
Because contributing is awesome..
#License
=========
(The MIT License)

Copyright (c) 2010 [Quinton Pike](https://twitter.com/QuintonPike)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.