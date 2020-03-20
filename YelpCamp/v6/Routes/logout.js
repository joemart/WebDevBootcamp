let route = require("express").Router()

route.get("/", async (req,res)=>{
	req.logout()
	res.redirect("/")
})

module.exports = route