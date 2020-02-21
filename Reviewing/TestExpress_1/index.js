let app = require('express')();

app.get("/" , (req,res) => {
	res.send("Welcome to my assignmentskjfdlaksdjfa");
});

app.get("/speak/:animal", (req,res) => {
	var sounds = {
		pig : "oink",
		cow : "moo",
		dog : "woof woof",
		cat : "human die",
		fish: "....."
	};
	var animal = req.params.animal;
	
	res.send(`The ${animal} says ${sounds[animal]}`);
});

app.get("/repeat/:word/:times", (req,res) => {
	var w = req.params.word;
	var t = req.params.times;
	var temp = "";
	for (var i = 0; i<t; i++) {
		temp += `${w} `;
	}
	
	res.send(temp);
});

app.get("/*", (req,res) => {
	res.send("What are you doing with your life???????");
});

app.listen(3000, process.env.ID, () => {
	console.log("Server listening");
});