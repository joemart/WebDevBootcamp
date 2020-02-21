let express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	campground  = require("./campground"),
	comment 	= require("./comments")
;
	let campgrounds = [
		{name:"Clouds",
		image: "https://www.photosforclass.com/download/pixabay-67488?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F50e7d14b424fad0bffd8992ccf2934771438dbf85254794b75297adc9645_960.jpg&user=WikiImages",
		description: "blah blah blah"},
		{name:"Desert Mesa",
		image: "https://www.photosforclass.com/download/pixabay-1848559?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d14b4f57a514f6da8c7dda793f7f1636dfe2564c704c7d2d7bd29645c450_960.jpg&user=tpsdave",
		description: "blah blah blah"},
		{name:"Canyon Floor",
		image: "https://www.photosforclass.com/download/pixabay-801867?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F5ee0d44b4c55b108f5d084609620367d1c3ed9e04e507441772f7dd59f4ccd_960.jpg&user=Free-Photos",
		description: "blah blah blah"}
	]

	function seedDB(){
		//remove all campgrounds
		campground.deleteMany({}, (err,data)=>{
		if(err)console.log(err)
			
			else{
				console.log("campgrounds removed");
				//add campgrounds
				campgrounds.forEach(x=>{
					campground.create(x, (err,campground)=>{
						if (err)console.log(err)
						else {
							
							console.log(data)
							//add comments
							comment.create({text:"This place is great, but I wish there was internet",
											author:"Homer"}, (err,comment)=>{
								if(err)console.log(err)
								else {
									campground.comments.push(comment);
									campground.save();
									console.log("created a new comment")
								}
							})
						} 
							
							
					})
				})
			}
		})
		
		
		
		
	}
	

module.exports = {seedDB:seedDB};