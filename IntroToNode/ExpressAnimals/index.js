var express = require("express"),
	app = express();

	app.set("view engine", "ejs");
	
	app.get("/", (req,res) =>{
		res.render("home");
	});
	
	var animalSounds = {
		pig : "Oink",
		cow : "Moo",
		dog : "woof woof"
	};
	app.get("/speak/:animal", (req,res)=> {
		 var animal = req.params.animal;
		 res.render("animals", {animal:animal, animalSounds:animalSounds});
	});
		
	app.get("/repeat/:word/:times", (req,res) => {
		var w = req.params.word,
			t = req.params.times;
		
		res.render("repeat", {w:w,t:t});
	});
	
	app.get("*", (req,res) =>{
		res.send("What are you doing with your life?");
	});
app.listen(process.env.PORT || 3000, process.env.IP, () => {
	console.log("Server is listening..");
});