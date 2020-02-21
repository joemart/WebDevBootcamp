let app = require('express')();

app.set("view engine", "ejs");
//Failed to lookup view "home.ejs" in views directory "/workspace/web-dev-COLT-udemy/views"
// YOU MUST BE IN THE SAME DIRECTORY
app.get("/", (req,res) => {
	res.render("home");
});

app.get("/r/:tweet", (req,res)=> {
	var param = req.params.tweet;
	res.render("tweet", {param:param});
	
})

app.listen(3000, process.env.ID, ()=> {
	console.log("Server is listening...");
});

