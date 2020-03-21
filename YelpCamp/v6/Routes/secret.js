let route = require("express").Router()

route.get("/", (req,res)=>{
	res.send("Secret")
})

module.exports = route