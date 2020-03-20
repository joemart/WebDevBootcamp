let route = require("express").Router()
let passport = require("passport")

route.get("/",async (req,res,next)=>{

	await res.render("login/login")
	
})

route.post("/", passport.authenticate("local",{
	successRedirect:"/secret",
	failureReject:"/login"
}),  async (req,res,next)=>{

	(  (err, user, info)=>{

			if (err) { return next(err); }
		    if (!user) { return res.redirect('/login'); }
		    req.logIn(user, function(err) {
		      if (err) { return next(err); }
		      return res.redirect('/users/' + user.username);
		    });
		})(req, res, next)

		})

module.exports = route