let express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	campground  = require("./models/campground"),
	seedDB		= require("./models/seeds"),
	comment 	= require("./models/comments")
;

seedDB.seedDB(); //delete campgrounds
mongoose.connect("mongodb://localhost/yelpcamp_v3",{
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




app.get("/", (req,res)=>{
	res.render("landing");
});

app.get("/campgrounds", (req,res) => {
	
	campground.find({},(err,items)=>{
		if(err) console.log(err)
		else res.render("index", {campgrounds:items})
	});
	
});

app.post("/campgrounds", (req,res) =>{
	
	let name = req.body.name,
		image =	req.body.image,
		desc = req.body.description;
	
	campground.create({name:name, image:image, desc:desc}, (err,item)=>{
		if(err) console.log(err)
		else res.redirect("/campgrounds");
	});
	
});


app.get("/campgrounds/new", (req,res) =>{
	res.render("new");
});

app.get("/campgrounds/:id", (req,res) =>{
	campground.findById(req.params.id).populate("comments").exec( (err, foundData)=>{
		if(err) console.log(err)
		else res.render("show", {campground:foundData});
	});
	
});

app.listen(3000, process.env.IP, () =>{
	console.log("Yelpcamp server is up");
});