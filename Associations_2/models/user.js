let mongoose 	= require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2",{
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => {
 console.log('Connected to MongoDB');
}).catch(err => {
 console.log(err.message);
} );

// USER - email, name

	var userSchema = new mongoose.Schema({
		email: String,
		name: String,
		posts: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Post"
			}
		]
	});

	module.exports = mongoose.model("User", userSchema);