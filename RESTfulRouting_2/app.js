let express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
mongoose.connect("mongodb://localhost/myDogs", {
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => {
 console.log('Connected to MongoDB');
}).catch(err => {
 console.log(err.message);
} );

let dogSchema = new mongoose.Schema({
	name: String,
	breed: String,
	image: String,
	neutered: Boolean,
	created: {type:Date, default:Date.now}
});

let Dog = mongoose.model("dog", dogSchema);

// Dog.create({
// 	name:"Baby",
// 	breed:"wolf",
// 	image: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
// 	neutered:false
// }, (err, data)=>{
// 	if (err) console.log(err)
// 	else console.log("created! =" + data)
// });

app.get("/", (req,res) =>{
	res.redirect("/dogs");
});


app.get("/dogs", (req,res)=>{
	
	
	Dog.find({},(err,data)=>{
		
		if(err) console.log(err)
		else (res.render("index",{dogs:data}))
	});
});

app.get("/dogs/new", (req,res) =>{
	res.render("new");
});

app.post("/dogs", (req,res)=>{
	Dog.create(req.body.dogs, (err, data)=>{
	  if(err) console.log(err)
		else res.redirect("/dogs")
	});
});

app.get("/dogs/:id", (req,res)=>{
	Dog.findById(req.params.id,(err,data)=>{
		if(err) console.log(err)
		else res.render("show", {dog:data})
	});
});

app.get("/dogs/:id/edit", (req,res)=>{
	Dog.findById(req.params.id, (err,data)=>{
		if(err)console.log(err)
		else res.render("edit", {dog:data})
	});
});
	
app.put("/dogs/:id", (req,res)=>{
	
	//res.send("put route");
	 Dog.findByIdAndUpdate(req.params.id, req.body.dog,(err,newBlog)=>{
		 if(err) console.log(err)
		 else res.redirect("/dogs/"+req.params.id)
	 } );
});

app.delete("/dogs/:id", (req,res)=>{
	Dog.findByIdAndDelete(req.params.id, (err, data)=>{
		if (err)console.log(err)
		else (res.redirect("/"))
	});
});
	
app.listen(3000, process.env.IP, ()=>{
	console.log("Woof woof is running");
});