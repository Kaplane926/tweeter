

$(document).ready(function() {
  $(function(){
    $('#tweet-text').on('input', function(){ 
      console.log($('#tweet-text').val().length)
      $('.counter').html(140 - $('#tweet-text').val().length)
      if($('.counter').val() < 0){
        $('.counter').css({
          color: 'red',
        })
      } else {
        $('.counter').css({
          color: 'white',
        })
      }
      
    
    })
  })
});

