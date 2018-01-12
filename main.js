
$(document).ready(function(){
  $('.register').on('click', function(){
    var email = $('.email').val();
    var username = $('.username').val();
    var password = $('.password').val();

    if(email&&username&&password&&(password.length)>=6){
      $('#success').show();
    }else if(email&&username&&(password.length)<6){
      $('.pvmessage').show();
    }else if(email==''&&username==''&&password==''){
      $('.emessage').show();
      $('.umessage').show();
      $('.pmessage').show();
    }else if(email==''&&username==''&&(password.length)<6){
      $('.emessage').show();
      $('.umessage').show();
      $('.pvmessage').show();
    }else if(email==''&&(password.length)<6){
      $('.emessage').show();
      $('.pvmessage').show();
    }else if(username==''&&(password.length)<6){
      $('.umessage').show();
      $('.pvmessage').show();
    }else if(email==''&&username==''){
      $('.emessage').show();
      $('.umessage').show();
    }else if(email==''&&password==''){
      $('.emessage').show();
      $('.pmessage').show();
    }else if(username==''&&password==''){
      $('.umessage').show();
      $('.pmessage').show();
    }else if(email==''){
      $('.emessage').show();
    }else if(username==''){
      $('.umessage').show();
    }else if(password==''){
      $('.pmessage').show();
    }
  });
});
