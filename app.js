var simple = require('simplejs');
var server = simple.apply('session', {town:'roseau', ocu:'gcc'})
	.apply('cache', {Expires:'-1', Pragma:'No-Cache'})
	.apply('compress')
	.apply('urlencode')
	.apply('redirect')
	.apply('secure');
	
    server.listen('192.168.3.11', 1337)
	server.securelisten('192.168.3.11', 4433);
	//server.createWebSock('localhost',1338);
	
	