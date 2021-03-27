/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const createTweetElement = function(tweet) {
  let date = new Date(tweet.created_at);
  //function to stop XXS
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  const createdTweet = `<div class="box">
          <article class="tweet"> 
            <img class="profile-pic" src="${tweet.user.avatars}"> ${tweet.user.name} 
            <a class="handle">${tweet.user.handle}</a> 
           </article>
            <a class="content">${escape(tweet.content.text)}</a>
          
          
            <footer>
            <a class="date">Tweeted on ${date.toDateString()} </a>
            <a class="icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
            </a>
            </footer>
          
          </div>
          <br/>`;
  return createdTweet;

};

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  $('#tweets-container').html("<container></container>");
  for (const tweet of tweets) {
    const newTweet = createTweetElement(tweet);
    $('#tweets-container').prepend(newTweet);
  }

};




$(document).ready(function() {
  //hides the error messages, and the tweet box
  $('.too-long').hide();
  $('.empty-box').hide();
  $('form').hide();
  //toggles the textarea on tweet box when you click the button in the top left
  $('.new-tweet-link').click(function() {
    $('form').slideToggle(500);
  });
      
  
  const $button = $('form');
  const loadTweets = function() {
     
    $.ajax('/tweets', { method: 'GET' })
      .then(function(data) {
        renderTweets(data);
      });
    $('.too-long').slideUp(500);
    $('.empty-box').slideUp(500);
  };
  loadTweets();
  $button.submit(function(event) {
    event.preventDefault();
    console.log('Button clicked, performing ajax call...');
    const tweetLength = $('#tweet-text').val().length;
    //checks to make sure tweet is valid, then calls an ajax post request if it is
    if (tweetLength > 140) {
      $('.too-long').slideDown(500);
      $('.empty-box').slideUp(500);
    } else if (tweetLength === 0) {
      $('.empty-box').slideDown(500);
      $('.too-long').slideUp(500);
    } else {
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $(this).serialize(),

      }).then(()=>{
      
      
        loadTweets();
        $('#tweet-text').val("");
      

      }).catch(()=>{
        alert("Something broke");
      });
  
    }
  });


});

