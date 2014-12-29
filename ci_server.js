var exec = require('child_process').exec;
var child;
var lib = {};
lib.repo_cloner = function(url){
	child = exec('git clone '+url+' sandbox/',function (error, stdout, stderr) {
		if (error !== null) {
			console.log('exec error: ' + error);
		}
	});
};

exports.lib = lib;
lib.repo_cloner('https://github.com/anantasur/ADDA.git');