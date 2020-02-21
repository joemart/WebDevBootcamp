var express = require('express');
var app = express();


//Hi there, welcome to my assignment
app.get("/",function(req,res){
	res.send("Hi there, welcome to my assignment");
})

//speak
app.get("/speak/:animal", function(req,res){
	var sound = {
		pig : "OINK",
		cow: "MOO",
		dog: "WOOF",
		cat: "I HATE YOU HUMAN",
		goldfish: "SUP"
	}
	var myAnimal = req.params.animal.toLowerCase();
	res.send(`THE ${myAnimal} SAYS "${sound[myAnimal]}"`);
});


//print variable 'x' an 'n' amount of times

app.get("/repeat/:myVar/:myTimes",function(req,res){
	var tempVar = req.params.myVar;
	var tempTimes = req.params.myTimes;
	
	var temp = "";
	for(var i = 0; i < tempTimes; i++)
		{
			temp += `${tempVar} `;
		}
	res.send(temp);
});



//star route

app.get("*",function(req,res){
	res.send("SORRY, page NOT FOUND.. WHAT ARE YOU DOING WITHEORJLDKFJSDLFK LIFE");
})


//Server is listening

app.listen(process.env.PORT || 3000, process.env.IP, () => {
	console.log("Server is listening");
});