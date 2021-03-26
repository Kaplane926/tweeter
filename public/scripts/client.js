/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet){
  let date = new Date(tweet.created_at)
  
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
  
  const createdTweet = `<div class="box">
          <article class="tweet"> 
            <img class="profile-pic" src="${tweet.user.avatars}"> ${tweet.user.name} 
            <a class="handle">${tweet.user.handle}</a> 
           </article>
            <a class="content">${escape(tweet.content.text)}</a>
          </div>
          <div class="footer">
            <footer>Tweeted on ${date.toDateString()} 
            </footer>
          </div>
          <br/>`
        return createdTweet

};

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  $('#tweets-container').html("<container></container>")
  for(const tweet of tweets){
    const newTweet = createTweetElement(tweet)
    $('#tweets-container').prepend(newTweet)
  }

}




$(document).ready(function(){
  
  const $button = $('form');
  const loadTweets = function(){
    //$('#tweets-container').html("<container></container>") 
    $.ajax('/tweets', { method: 'GET' })
  .then(function (data) {
    renderTweets(data);
  });
  $('.too-long').slideUp(500)
  $('.empty-box').slideUp(500)
}
  loadTweets()
  $button.submit(function (event) {
    event.preventDefault();
    console.log('Button clicked, performing ajax call...');
    const tweetLength = $('#tweet-text').val().length
    
    if(tweetLength > 140){
      $('.too-long').slideDown(500)
      $('.empty-box').slideUp(500)
    } else if (tweetLength === 0){
      $('.empty-box').slideDown(500)
      $('.too-long').slideUp(500)
    } else {
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize(),
      /*success: function(resultData){
          console.log("Its the data!",resultData)
      }*/

    }).then(()=>{
     
      loadTweets();
      

    }).catch(()=>{
      
      console.log("error")
    })
  
  }
    })


});

