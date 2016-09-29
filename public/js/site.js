var ct = document.getElementById('ct');
ct.href='mai'+'lto:'+'kwapo'+'dev'+'@'+'gmail.com';
ct.innerHTML="Ema"+"il us : "+'kwapo'+'dev'+'@'+'gmail.com';

function clkFddbk(e) {
     var fbf = $("#feedbackform");  
   var d =fbf.serialize();
   if(d.email !=='' && d.feedback !=='')
   {
  
   $.ajax({
       url:"/home/submitfeedback",
       dataType:'JSON',
       method:'POST',
       data: d,
       success:function(res)    
       {
           console.log(res);
           if(res.success === true)
           {
           $(".fbform").css({'opacity':'0'});
            $('body').css({'backgroundColor':'rgba(255,255,255,1)', 'overflow':'auto','height':'auto'})
          $('#hm').css('pointerEvents', 'all');
            showToast('Comment Saved thanks for your feedback we appreciate the effort');
            grecaptcha.reset();
           fbf[0].reset();
           }
       }
   })
   }
   
}

$("#fbt").click(function(){clkFddbk(event);});
$("#feedback").click(function(){
    $(".fbform").css({'height':'auto','opacity':'0.9'});
   
    $('body').css({'backgroundColor':'rgba(0,0,0,0.4)', 'overflow':'hidden','height': '100%'})
     $('#hm').css('pointerEvents', 'none');
     $('.plain').css('backgroundColor','#ffffff');
    
});

$("#clbt").click(function(event){$(".fbform").css({'opacity':'0'});
    $('body').css({'backgroundColor':'rgba(255,255,255,1)', 'overflow':'auto','height':'auto'})
     $('#hm').css('pointerEvents', 'all');
});
$("#feedbackform").submit(function(event){event.preventDefault();})

function showToast(text)
{
    
    $('#toast').css({'opacity':'0.9', 'min-height':'40px'});
     $('#toast').html('<p>'+text+'</p>')
    setTimeout(function(){
         $('#toast').css({'opacity':'0', 'min-height':'0px'});
    },3000)
}
