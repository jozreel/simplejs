var simple = require('simple');
var home = new simple.simplecontroler();

home.index = function()
{
	console.log(this.method);
	this.viewholder.title="test";
	this.loadview('home');
}

module.exports = home;
