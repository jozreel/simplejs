console.log('pppp');
var home={
index:function()
{
	this.viewholder.p ='klsacnlkndlknvd';
    this.viewholder.q = 'pllplpl <sj>';
	this.loadview('home');
},
downloadsimple:function()
{
   
    var pth = require('simple').config.root+ '/public/uploads/simplejs.zip';
    console.log(pth);
    this.sendFile(pth);
},
formtest:function()
{
    console.log('kpkpk');
},
submitfeedback:function(){
   var mod = this.loadmodel('feedback');
  var rc = this.req.postdata['g-recaptcha-response'];
 
  if(!rc)
    this.jsonResp({success:false, message:'Please select recaptcha'});
  else
  {
      var https = require('https');
      https.get('https://www.google.com/recaptcha/api/siteverify?secret=6Ld7pAcUAAAAAERMEABzFX5LwPSYtwU_P6oyZEYy&response='+rc+'&remoteip='+this.req.connection.remoteAddress,(res)=>{
         var bd = '';
       //  var r =JSON.parse(res);
         res.on('data',(ch)=>{bd+= ch.toString();});
         res.on('end',()=>{
               var rsp = JSON.parse(bd);
               if(rsp.success === true)
               {
                   mod.addFeedback(this.req.postdata, (doc)=>{this.jsonResp(doc); console.log(doc);});
               }     
            
        });
         
             
      });
  }
 
} 

}
module.exports = home;
 