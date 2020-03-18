let express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	campground  = require("./campground"),
	comment 	= require("./comments")
;
	let campgrounds = [
		{name:"Clouds",
		image: "https://www.photosforclass.com/download/pixabay-255116?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F54e5d0424b54b108f5d084609620367d1c3ed9e04e50744177287fd5954ac5_960.jpg&user=cegoh",
		description: "I like clouds"},
		{name:"Desert Mesa",
		image: "https://www.photosforclass.com/download/pixabay-1510592?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e5d4434f5bae14f6da8c7dda793f7f1636dfe2564c704c7d2d7cd0964fc258_960.jpg&user=MichaelGaida",
		description: "I like desert mesa stuff"},
		{name:"Canyon Floor",
		image: "https://www.photosforclass.com/download/pixabay-3095716?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e0dc464d53aa14f6da8c7dda793f7f1636dfe2564c704c7d2d7cd0964fc258_960.jpg&user=jplenio",
		description: "Canyon stuffffff"}
	]
	
	
	let seedDB = async () => {
		try{
				await campground.deleteMany()
				console.log("Campgrounds removed!")
				await comment.deleteMany()
				console.log("Comments removed!")
				
				for (x of campgrounds)
					{
						let a = await campground.create(x)
						let b = await comment.create({text:"This place is great, but I wish there was internet", author:"Homer"})
						console.log("Created a new comment")
					
						await a.comments.push(b)
						await a.save()
						console.log("Campground saved")
					}
						
		}
		catch(e)
			{
				console.log(e)
			}
	}
	
	// function seedDB2(){
	// 	//remove all campgrounds
	// 	campground.deleteMany({}, (err,data)=>{
	// 	if(err)console.log(err)
			
	// 		else{
	// 			console.log("campgrounds removed");
	// 			//add campgrounds
	// 			campgrounds.forEach(x=>{
	// 				campground.create(x, (err,campground)=>{
	// 					if (err)console.log(err)
	// 					else {
							
	// 						console.log(data)
	// 						//add comments
	// 						comment.create({text:"This place is great, but I wish there was internet",
	// 										author:"Homer"}, (err,comment)=>{
	// 							if(err)console.log(err)
	// 							else {
	// 								campground.comments.push(comment);
	// 								campground.save();
	// 								console.log("created a new comment")
	// 							}
	// 						})
	// 					} 
							
							
	// 				})
	// 			})
	// 		}
	// 	})
	// }
	

module.exports = {seedDB:seedDB};