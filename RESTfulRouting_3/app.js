//completed it in 1:21:48

let express = require("express"),
	app 	= express(),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	expressSanitizer = require("express-sanitizer");

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/shoes", {
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => {
 console.log('Connected to MongoDB');
}).catch(err => {
 console.log(err.message);
} );

let shoesSchema = new mongoose.Schema({
	name:String,
	image:String,
	brand: String,
	pair: Boolean,
	created: {type:Date, default:Date.now}
});

let Shoe = mongoose.model("Shoe", shoesSchema);

// Shoe.create({
// 	name:"guacamole",
// 	image:"https://pixabay.com/get/54e4d3464e55a414f6da8c7dda793f7f1636dfe2564c704c7d2e7adc934dc050_340.jpg",
// 	brand:"Nike",
// 	pair:false
// });

app.get("/", (req,res)=>{
	res.redirect("/shoes");
});

app.get("/shoes", (req,res)=>{
	Shoe.find({},(err,data)=>{
		if(err) console.log(err)
		else res.render("index",{shoes:data});
	});
	
});

app.get("/shoes/new", (req,res)=>{
	res.render("new");
})

app.post("/shoes", (req,res)=>{
	Shoe.create(req.body.shoe, (err,data)=>{
		if(err) console.log(err)
		else res.redirect("/shoes");
	});
});

app.get("/shoes/:id", (req,res)=>{
	Shoe.findById(req.params.id, (err,data)=>{
		if(err) console.log(err)
		else res.render("show", {shoe:data})
	});
});

app.get("/shoes/:id/edit", (req,res)=>{
	Shoe.findById(req.params.id, (err,data)=>{
		if(err)console.log(err)
		else res.render("edit", {shoe:data})
	});
});

app.put("/shoes/:id", (req,res)=>{
	Shoe.findByIdAndUpdate(req.params.id, req.body.shoe, (err,data)=>{
		if(err)console.log(err)
		else res.redirect("/shoes/"+req.params.id)
	});
});

app.delete("/shoes/:id", (req,res)=>{
	Shoe.findByIdAndDelete(req.params.id, (err,data)=>{
		if(err) console.log(err)
		else res.redirect("/");
	});
});

app.listen(3000, process.env.IP, ()=>{
	console.log("Server is running");
});