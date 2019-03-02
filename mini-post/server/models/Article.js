const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const articleSchema = new mongoose.Schema({
	title: String,
	description: String,
	created: {type: Date, default: Date.now},
	author: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    comments: [{
    		type: Schema.Types.ObjectId,
    		ref: 'Comment'
    }]
})


const Article = mongoose.model('Article', articleSchema);

module.exports = Article;