let route = require("express").Router()
let passport = require("passport")

route.get("/",async (req,res,next)=>{

	await res.render("login/login")
	
})

route.post("/", async (req,res,next)=>{
	try{
		passport.authenticate("local", (err, user, info)=>{

		if (err) { return next(err); }
	    if (!user) { return res.redirect('/login'); }
	    req.logIn(user, function(err) {
	      if (err) { return next(err); }
	      return res.redirect('/campgrounds');
	    });
			})(req, res, next)
	}
	catch(e){
		console.log(e)
	}
		})

module.exports = route