let route = require("express").Router()

route.get("/", (req,res)=>{
	res.send("Even more secret")
})

module.exports = route