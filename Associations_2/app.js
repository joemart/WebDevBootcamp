let mongoose = require("mongoose");
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

	var Post = mongoose.model("Post", postSchema);

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

	var User = mongoose.model("User", userSchema);


///////////////////////////////

// User.create({
// 	email: "bob@gmail.com",
// 	name: "Bob Belcher"
// });



// Post.create({
// 	title:"How to cook the best burger pt. 2",
// 	content: "blah"
// }, (err,data)=>{
// 	User.findOne({email:"bob@gmail.com"}, (err,foundData)=>{
// 		if(err) console.log(err)
// 		else {
// 			foundData.posts.push(foundData);
// 			foundData.save((err,data)=>{
// 				if(err)
// 					console.log(err)
// 				else console.log(data)
// 			});
// 		}
// 	});
// });

// Post.create({
// 	title:"Hello 2",
// 	content:"yesss"
// }, (err,data)=>{
// 	if(err) console.log(err)
// 	else User.findOne({email:"bob@gmail.com"},(err,foundUser)=>{
// 		if(err)console.log(err)
// 		else{
// 			foundUser.posts.push(data);
// 			foundUser.save((err,data)=>{
// 				if(err)console.log(err)
// 				else console.log(data)
// 			});
// 		} 
			
// 	});
// });

//Find user
//find all posts for that user

User.findOne({email:"bob@gmail.com"})
	.populate("posts") 		//look up all the objectIds 
	.exec((err,user)=>{		//execute the function with the information
	if(err)console.log(err)
	else console.log(user)
	
});

