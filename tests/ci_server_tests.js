var lib = require('../ci_server.js').lib;
var assert = require('chai').assert;
var fs = require('fs');

describe('#repocloner',function(){
	it('clones the remote repo of ADDA into sandbox folder',function(done){
		lib.repo_cloner('https://github.com/anantasur/ADDA.git');
		assert.ok(fs.existsSync('sandbox/app.js'));
		assert.ok(fs.existsSync('sandbox/bin/www'));
		done();
	});
});