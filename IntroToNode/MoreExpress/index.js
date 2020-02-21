var express = require("express");
var app = express();

app.use(express.static("public")); //searches the public directory
// app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs"); //tells express to use ejs, takes out the .ejs format

app.get("/",(req,res)=>{
	res.render("home"); //ejs = embedded javascript
	
})

app.get("/fallinlovewith/:thing",(req,res)=>{
	var thing = req.params.thing.toUpperCase();
	res.render("love", {thing:thing});
});

app.get("/posts", (req,res) => {
	var posts = [
		{title: "My post 1", author: "Susie"},
		{title: "My post 2", author: "Adam"},
		{title: "My post 3", author: "Elephan"},
		{title: "My post 4", author: "XYZ"}	
	];
	
	res.render("posts",{posts:posts});
});

app.get("*", (req,res) => {
	res.send("notFound",);
});

app.listen(process.env.PORT || 3000, process.env.IP, () => {
	console.log("Server listening...");
})