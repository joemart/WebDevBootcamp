let express = require("express"),
	app = express(),
	bodyParser = require("body-parser")
;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

////////////////////////////

 let campgrounds = [
		 {name:"Chicago", image:"https://pixabay.com/get/55e3d3444a5ab108f5d084609620367d1c3ed9e04e50744175287cd5964fc6_340.jpg"},
		 {name:"Texas", image:"https://pixabay.com/get/57e8d14b4f57a514f6da8c7dda793f7f1636dfe2564c704c7d2f7cd3964cc75b_340.jpg"},
		 {name:"New York", image:"https://pixabay.com/get/50e9d5414b56b108f5d084609620367d1c3ed9e04e50744175267ad7934ac2_340.jpg"}
	 
	 ];




app.get("/", (req,res)=>{
	res.render("landing");
});

app.get("/campgrounds", (req,res) => {
	
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", (req,res) =>{
	
	let name = req.body.name;
	let image =	req.body.image;
	
	campgrounds.push({name:name, image:image});
	
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req,res) =>{
	res.render("new");
});

// app.get("/landing", (req,res) =>{
// 	res.render("landing");
// });

app.listen(3000, process.env.IP, () =>{
	console.log("Yelpcamp server is up");
});