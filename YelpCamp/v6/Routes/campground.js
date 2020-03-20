let route = require("express").Router()
let campground = require("../models/campground")


route.get("/", async (req,res)=>{
	try{
	let campgrounds = await campground.find({})
	res.render("campgrounds/index", {campgrounds:campgrounds})
	}
	catch(e){
		console.log(e)
	}
})

route.post("/", async (req,res)=>{
		try{
		let {name,image,desc} = req.body;
		await campground.create({name,image,desc})
		res.redirect("campgrounds/campgrounds")
		}
	catch(e)
		{
			console.log(e)
		}
})

route.get("/new", async(req,res)=>{
	res.render("campgrounds/new");
})

route.get("/:id", async(req,res)=>{
	try{
			let foundData = await campground.findById(req.params.id).populate("comments")
			
			res.render("campgrounds/show", {campground:foundData})
		}
	catch(e)
		{
			console.log(e)
			res.redirect("/campgrounds")
		}
})

route.get("/:id/comments/new", async(req,res)=>{
	try{
			let cg = await campground.findById(req.params.id)
			res.render("comments/new", {campground:cg})
	}
	catch(e){
		console.log(e)
	}
})

route.post("/:id/comments", async (req,res)=>{
	try{
		
		let com = req.body.comment
		let author = req.body.author
		
		let C = await comment.create({text:com, author:author})
		let CG = await campground.findById(req.params.id)
		await CG.comments.push(C._id)
		await CG.save()
		
		
		res.redirect("/campgrounds/"+req.params.id)
	}
	catch(e){
		console.log(e)
	}
})

module.exports = route