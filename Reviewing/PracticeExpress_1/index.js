let app = require('express')();

app.set("view engine", "ejs");

app.get("/", (req,res) => {
	res.send ("Hello");
});

app.get("/dog", (req,res) => {
	console.log("Someone woofed");
	res.send("Woof");
});

app.get("/cat", (req,res) => {
	console.log("Someone did a meow");
	res.send("Meow");
});


app.listen(3000, process.env.ID, () => {
	console.log("Server listeiningasdfasdfad");
})