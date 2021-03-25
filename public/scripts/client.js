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


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

$(document).ready(function(){
  
const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
})
