const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TweetSchema = new Schema({
    tweet: {
        type: String,
        required: "You must include a tweet"
    },
    userName: {
        type: String,
        required: "You must have a username"
    },
    date: {
        type: Date,
        default: Date.now
    },


    // `date` must be of type Date. The default value is the current date
});



var Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;