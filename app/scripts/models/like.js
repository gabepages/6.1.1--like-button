var $ = require('jquery');
var Backbone = require('backbone');

var Like = Backbone.Model.extend({

  initialize: function(){
    console.log($('.like-button').prepend(0 + ' ').text());
  },

  like: function(){
    this.set({'likes':this.get('likes') + 1});
    return this.get('likes');
  },

  toJSON: function(){
    if(this.get('likes') == 1){
     $('.like-button').text('1 Like');
    }
  }

});

module.exports = Like;
