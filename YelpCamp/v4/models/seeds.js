let express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	campground  = require("./campground"),
	comment 	= require("./comments")
;
	let campgrounds = [
		{name:"Rose 1",
		image: "https://s7img.ftdi.com/is/image/ProvideCommerce/504_MAC?$proflowers-hero-lv-new$",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
		{name:"Rose 2",
		image: "https://s7img.ftdi.com/is/image/ProvideCommerce/FW90_MAC?$ftd-hero-lv-new$",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak"},
		{name:"Roses 3",
		image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,hing software like Aldus PageMaker including versions of Lorem Ipsum.s"}
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
	
	
	

module.exports = {seedDB:seedDB};