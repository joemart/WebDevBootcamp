let app = require('express')();

app.get("/", (req,res) => {
	res.send("Home");
});


app.get("/r/:subreddit", (req,res) => {
	var myVar = req.params.subreddit.toLowerCase();
	res.send(`You searched for ${myVar}`);
});


app.get("/*", (req,res) => {
	res.send("Not defined");
});


app.listen(3000, process.env.ID, () => {
	console.log("Server is listening");
});