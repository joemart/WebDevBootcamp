let express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true})); //read up on the docs

app.use(express.static('public'));

app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", (req,res) =>{
	res.render("home");
});

app.post("/addfriend", (req,res) => {
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	res.redirect("/friends");
});

app.get("/friends", (req,res) => {
	
	res.render("friends", {friends:friends});
});

app.listen(process.env.PORT || 3000, process.env.ID, () => {console.log("Server is listening")});
