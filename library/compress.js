var compress = function(req, res)
{
	

	
	var acceptEncoding = req.headers['accept-encoding'];
    
     if (!acceptEncoding) {
        acceptEncoding = '';
		this.compress = false;
        }
		else{
       
	    this.compress = true;
        if(req.headers['user-agent'].match(/trident/i)||req.headers['user-agent'].match(/edge/i))
        {console.log('microfuk');
           this.acceptEncoding ='gzip'; 
           
          
        }
        else
		 this.acceptEncoding = acceptEncoding;
        
		}
	 
}
module.exports = compress;       