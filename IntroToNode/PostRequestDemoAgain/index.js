var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"); //use it when you want to extract info from user

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

var friends = ["Chris", "Jeeeeeaa", "What", "potato"];

app.get("/", (req,res) => {
	res.render("home");
});

app.get("/friends", (req,res) =>{
	res.render("friends", {friends:friends});
});

app.post("/newFriend", (req,res) =>{
	 //console.log(req.body);
	var newF = req.body.newFriend;
	friends.push(newF);
	res.redirect("/friends");
})

app.listen(process.env.PORT || 3000, process.env.IP, () => {
	console.log("Server is listenktnisdjflaj");
});