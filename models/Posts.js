var mongoose = require("mongoose");
const randomstring = require('randomstring');
const passportLocalMongoose = require("passport-local-mongoose");

var PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  postType: {
    type: String,
    required: true,
  },
  rating: {
    type: Number
  },

  view: {
    type: Number,
    default: 1
  },


  hours:{
    type:String
  },

  image: 
  {
    type: String,
    default: "https://kissablezebralipsandotherthings.files.wordpress.com/2015/02/smile.jpg"
  },

  imageId: String,
  
  image_approved : Boolean,
  info : [Object],

  description: {
    type: String,
    required: true,
  },
  //average rating
  rating_avg : String,
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      username: String
    },
  ],
  location: {
    type: String
  },

  lat: Number,
  lng: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },

  //this is for hangout
  meetTime: {
    type: Date,
    default: Date.now
  },

    meetLocation: String,
  signup: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      username: String
    },
  ],
  ///
  tags: {
    type: String
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String, 
    image: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      text: String
    }
  ]
}
);
PostSchema.plugin(passportLocalMongoose)

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;