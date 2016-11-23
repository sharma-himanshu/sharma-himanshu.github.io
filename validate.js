$(document).ready(function() {

    $('#getBetaForm').on('submit', function(e) {
        e.preventDefault();
        
        //get the name field value
        var email = $('#email').val();
        if (email.trim().length > 0) {
            $.ajax({
                url:'https://formspree.io/himanshu.sharma.814@my.csun.edu',
                method:'POST',
                data:{
                    name:"",
                    _replyto:email,
                     email:email,
                    _subject:'My Form Submission',
                },
                dataType:"json",
                success:function() {
                    console.log('success'); 
                    $('#getBetaForm').hide();
                    $('#thankyouBlock').show();
                },
                error:function(error) {
                    console.log('ajax error = ' + error);
                }   

            });  
        }                
    });

}); 