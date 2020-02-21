var mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
	text: String,
	author: String
}),
	Comment = new mongoose.model("comment", commentSchema);

module.exports = Comment;