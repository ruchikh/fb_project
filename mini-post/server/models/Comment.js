const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
	value: String,
	// PostId: {type:Schema.Type.ObjectId, ref:"Article"}
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;