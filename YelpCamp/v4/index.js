let express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	campground  = require("./models/campground"),
	seedDB		= require("./models/seeds"),
	comment 	= require("./models/comments")
;

// seedDB.seedDB(); //delete campgrounds
mongoose.connect("mongodb://localhost/yelpcamp_v4",{
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => {
 console.log('Connected to MongoDB');
}).catch(err => {
 console.log(err.message);
});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'))

app.get("/", (req,res)=>{
	res.render("landing");
});

app.get("/campgrounds", async (req,res) => {
	
	try{
	let campgrounds = await campground.find({})
	res.render("campgrounds/index", {campgrounds:campgrounds})
	}
	catch(e){
		console.log(e)
	}
});

app.post("/campgrounds", async (req,res) =>{
	try{
		let {name,image,desc} = req.body;
		await campground.create({name,image,desc})
		res.redirect("campgrounds/campgrounds")
		}
	catch(e)
		{
			console.log(e)
		}
});

app.get("/campgrounds/new", (req,res) =>{
	res.render("campgrounds/new");
});

app.get("/campgrounds/:id", async (req,res) =>{
	try{
			let foundData = await campground.findById(req.params.id).populate("comments")
			
			res.render("campgrounds/show", {campground:foundData})
		}
	catch(e)
		{
			console.log(e)
			res.redirect("/campgrounds")
		}
});

//Comments

app.get("/campgrounds/:id/comments/new", async (req,res)=>{
	try{
			let cg = await campground.findById(req.params.id)
			res.render("comments/new", {campground:cg})
	}
	catch(e){
		console.log(e)
	}

})
  
app.post("/campgrounds/:id/comments", async (req,res)=>{
	
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

app.listen(3000, process.env.IP, () =>{
	console.log("Yelpcamp server is up");
})