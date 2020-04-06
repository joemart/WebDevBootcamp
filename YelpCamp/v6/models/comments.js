var mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
	text: String,
	author: {
			id:{
				type:mongoose.Schema.Types.ObjectId,
				ref: "User"
			},
			username: "String"
	}
}),
	Comment = new mongoose.model("comment", commentSchema);

module.exports = Comment;