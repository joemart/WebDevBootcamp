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

// POST - title, content

	var postSchema = new mongoose.Schema({
		title:String,
		content:String
	});

	module.exports = mongoose.model("Post", postSchema);