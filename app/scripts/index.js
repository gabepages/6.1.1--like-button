var $ = require('jquery');
var Backbone = require('backbone');
var Like = require('./models/like');


var likeClick = new Like({likes: 0});


$('.like-button').on('click',function(){
  var newNum = likeClick.like();
  $('.like-button').text(newNum + ' ' + 'Likes');
  likeClick.toJSON();
});
// replaceWith()
