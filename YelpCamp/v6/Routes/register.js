let route = require("express").Router()

route.get("/", async (req,res)=>{

	res.render("signup/register")
})

route.post("/", async (req,res)=>{
	try{
		let {username, password} = req.body;
		await User.register(new User({username:username}), password)
		passport.authenticate("local")
	}
	catch(e)
	{
		console.log(e)
		res.render("register")
	}
})

module.exports = route