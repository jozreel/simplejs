var feedback = {
    modelname:'feedback',
    addFeedback:function(data,func)
    {
        this.email = data.email;
        this.comment =data.feedback;
        this.save(func,'A');
    }
}
module.exports=feedback;