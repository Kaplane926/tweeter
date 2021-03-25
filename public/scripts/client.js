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


// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]




$(document).ready(function(){
  renderTweets(data)

})
