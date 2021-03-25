/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet){

  return `
        <div class="box">
          <article class="tweet"> <div ><img class="profile-pic" src="${tweet.user.avatars}"> ${tweet.user.name} </div> <div class="handle">${tweet.user.handle}</div> </article>
            <div class="content">${tweet.content.text}</div>
          </div>
          <div class="footer">
        <footer>${tweet.created_at} days ago</footer>
        </div>
        <br/>`

};

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for(const tweet of tweets){
    $('#tweets-container').append(createTweetElement(tweet))
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
