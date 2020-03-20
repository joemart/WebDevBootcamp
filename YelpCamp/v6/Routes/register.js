let route = require("express").Router()
let User 		= require('../models/User')
let passport 	= require("passport")
 
route.get("/", async (req,res)=>{
 
	res.render("signup/register")
})
 
route.post("/", async (req,res,next)=>{
	try{
		let {username, password} = req.body;
 
 
		await User.register(new User({username}), password)
		passport.authenticate("local", (err, user, info)=>{ //memorize this function
			
			if(err) return next(err)
							
			if(!user) return res.send("bad")
 
			req.logIn(user, (err)=>{
				if(err) return next(err)
					return res.redirect("/campgrounds")
			})
		})(req,res,next)
	}
	catch(e)
	{
		console.log(e)
		res.render("./signup/register")
	}
})
 
module.exports = route