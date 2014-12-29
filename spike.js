// var exec = require('child_process').exec;
// exec('echo 123');


var sys = require('sys')
var exec = require('child_process').exec;
var child;
var remote;
child = exec('echo 1', function (error, stdout, stderr) {
	remote = stdout;
	// sys.print('stdout: ' + stdout);
	// sys.print('stderr: ' + stderr);
	if (error !== null) {
		console.log('exec error: ' + error);
	}
	console.log(remote)
});