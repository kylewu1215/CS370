const mongoose = require('mongoose');
const randomstring = require('randomstring');
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  hometown:{
    type: String, 
    required: false
  },
  biography:{
    type: String, 
    required: false
  },
  gender:{
    type: String, 
    required: false
  }, 
  year:{
    type: String, 
    required: false
  }, 
  major:{
    type: String, 
    required: false
  }, 
  facebookaccount:{
    type: String,
    required: false
  },

likedPost: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
      title: String
    },
  ],
  
  /* --Two Fields for Email Verification-- */
  // whether account is activated 
  active:{
    type: Boolean, 
    required: true,
    default: false
  },

  // token for email verification
  temporarytoken:{
    type: String, 
    //required: true,
    default: randomstring.generate(6)
  },

  // token for reset password
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  },

  date: {
    type: Date,
    default: Date.now
  },

  image: {
    type: String,
    required: false, 
    default: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/69794322_2418981958342192_871629764085940224_o.jpg?_nc_cat=108&_nc_ohc=6baU96a8qC0AQlkRnsY_7XWTJNA_nV6opX4t-ozThtc8FL9Ntfn6GRi0w&_nc_ht=scontent-atl3-1.xx&oh=2230949839c387ce8b92f0a909c9f24f&oe=5E8C3AD7"
  },

  sentRequest:[{
		username: {type: String, default: ''}
	}],
	request: [{
		userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		username: {type: String, default: ''}
	}],
	friendsList: [{
		friendId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		friendName: {type: String, default: ''}
	}],
	totalRequest: {type: Number, default:0}

});

// const UserSchema = new Schema({
//   username: String,
//   email: String,
//   password: String,
//   hometown: String,
//   gender: String,
//   active: Boolean,
//   temporarytoken: String
// }, {
//   timestamps: {
//       createdAt: 'createdAt',
//       updatedAt: 'updatedAt'
//   }
// });

UserSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', UserSchema);

module.exports = User;
