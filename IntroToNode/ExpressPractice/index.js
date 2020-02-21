var express = require('express');
var app = express();

// "/" => "HI THEERE"

app.get("/", function(req, res){ //the root
	res.send("HI THERE");
});

// "/bye" => "GOOBYE"
app.get("/bye", function(req,res){
	res.send("BYE");
})
// "/dog" => "MEOW"
app.get("/dog", function(req,res){
	console.log("SOMEONE MADE A REQUEST OF DOG");
	res.send("MEOW");
})

//path variables or route parameters
//colon symbolizes a pattern
app.get("/r/:subredditName", function(req,res){
	let subreddit = req.params.subredditName.toUpperCase();
	// console.log(req.params);
	res.send(`WELCOME TO THE ${subreddit} SUBREDDIT!!!`);
});

app.get("/r/:subredditName/comments/:id/:title/", function(req,res){
	res.send("comments id title");
});

// always put this one last since it's checked last
// route that doesn't exist
app.get("*", function(req,res){
	console.log("HAH! SILLY SILLY!");
	res.send("NO");
})

//Start the server

app.listen(process.env.PORT || 3000, process.env.IP, () => {console.log("Server is listening...")});