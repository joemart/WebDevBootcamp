let express 	= require("express"),
	app 		= express()
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	myModel 	= require("./models/hello")
;

mongoose.connect("mongodb://localhost/yelpcamp",{
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => {
 console.log('Connected to MongoDB');
}).catch(err => {
 console.log(err.message);
} );

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

//schema setup

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var campground = mongoose.model("campground", campgroundSchema);

// var new_campground = new campground({
// 	name:"Chicago", image:"https://pixabay.com/get/55e3d3444a5ab108f5d084609620367d1c3ed9e04e50744175287cd5964fc6_340.jpg"
// });
// new_campground.save((err,item)=>{
// 	if (err) console.log(err)
// 	else console.log("SAVED " + item)
// });

campground.create({
	name:"Chicago", image:"https://pixabay.com/get/52e0d2444a51b108f5d084609620367d1c3ed9e04e507441742f7bd19f45c3_340.jpg",
	description: "Text description"
}, (err, item)=> {
	if(err) console.log(err)
	else
		console.log(item)
});

////////////////////////////

 // let campgrounds = [
 // {name:"Chicago", image:"https://pixabay.com/get/55e3d3444a5ab108f5d084609620367d1c3ed9e04e50744175287cd5964fc6_340.jpg"},
 // {name:"Texas", image:"https://pixabay.com/get/57e8d14b4f57a514f6da8c7dda793f7f1636dfe2564c704c7d2f7cd3964cc75b_340.jpg"},
 // {name:"New York", image:"https://pixabay.com/get/50e9d5414b56b108f5d084609620367d1c3ed9e04e50744175267ad7934ac2_340.jpg"}
	 
 // ];




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
	campground.findById(req.params.id, (err, foundData)=>{
		if(err) console.log(err)
		else res.render("show", {campground:foundData});
	});
	
});

app.listen(3000, process.env.IP, () =>{
	console.log("Yelpcamp server is up");
});