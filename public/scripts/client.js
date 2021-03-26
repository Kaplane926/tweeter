/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet){
  let date = new Date(tweet.created_at)
  
  const createdTweet = `<div class="box">
          <article class="tweet"> 
            <img class="profile-pic" src="${tweet.user.avatars}"> ${tweet.user.name} 
            <a class="handle">${tweet.user.handle}</a> 
           </article>
            <a class="content">${tweet.content.text}</a>
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
  for(const tweet of tweets){
    const newTweet = createTweetElement(tweet)
    $('#tweets-container').append(newTweet)
  }

}




$(document).ready(function(){
  const $button = $('form');
  const loadTweets = function(){
    $('#tweets-container').html("<container></container>") 
    $.ajax('/tweets', { method: 'GET' })
  .then(function (data) {
    renderTweets(data);
  });
}
  $button.submit(function (event) {
    event.preventDefault();
    console.log('Button clicked, performing ajax call...');
    //console.log($(this).serialize())
    if($(this).serialize().length >= 140){
      alert("You've exceeded the character limit!")
    } else if ($(this).serialize().length === null){
      alert("Man type something")
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
      
        alert("You're tweet must contain content.")
      
      console.log("error")
    })
  }
    
    })

});

