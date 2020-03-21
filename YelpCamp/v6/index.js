let express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("./models/connectDB"),
	campground  = require("./models/campground"),
	seedDB		= require("./models/seeds"),
	comment 	= require("./models/comments")

	,passport	= require('passport')
	,LocalStrategy = require('passport-local')
	,User 		= require('./models/User')

	,campgroundRouter = require("./Routes/campground")
	,registerRouter		= require("./Routes/register")
	,loginRouter 		= require("./Routes/login")
	,logoutRouter 		= require("./Routes/logout")
	,secretRouter 		= require("./Routes/secret")
	,evenMoreSecretRouter =  require("./Routes/evenMoreSecret")

;

app.use(require("express-session")({
	secret:"Yelpcamp"
	,resave:false
	,saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// seedDB.seedDB(); //delete campgrounds


app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))

app.get("/", (req,res)=>{
	res.render("landing");
});

let isLoggedIn = (req,res,next) =>{
	if(req.isAuthenticated()) return next()
		res.redirect("/login")
}


app.use("/campgrounds", campgroundRouter)
app.use("/register", registerRouter)
app.use("/login", loginRouter)
app.use("/logout", logoutRouter)
app.use("/secret",  secretRouter)
app.use("/evenMoreSecret", isLoggedIn, evenMoreSecretRouter)

app.use((req,res,next)=>{
	const err = new Error("not found")
	err.status = 404;
	next(err)
})

app.use((err,req,res,next)=>{
	res.status(err.status || 500)
	res.json({
		error:{
			message:err.message
		}
	})
})

app.listen(3000, process.env.IP, () =>{
	console.log("Yelpcamp server is up");
})