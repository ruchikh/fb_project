const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
	value: String,
	postId: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
      },
  author: {
  	type: Schema.Types.ObjectId,
  	ref: 'User'
  }
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;