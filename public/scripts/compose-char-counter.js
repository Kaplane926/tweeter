
//dynamically changes the value of the counter as characters are inputted
$(document).ready(function() {
  $(function() {
    $('#tweet-text').on('input', function() {
      $('.counter').html(140 - $('#tweet-text').val().length);
      if ($('.counter').val() < 0) {
        $('.counter').css({
          color: 'red',
        });
      } else {
        $('.counter').css({
          color: 'white',
        });
      }
      
    
    });
  });
});

