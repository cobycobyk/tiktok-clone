const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
})

module.exports = mongoose.model('Video', videoSchema);