var simple = require('simple');
var home = new simple.simplecontroler();

home.index = function()
{
	
	this.viewholder.title="test";
	this.loadview('home');
}

module.exports = home;
