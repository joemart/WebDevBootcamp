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


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'))

app.get("/", (req,res)=>{
	res.render("landing");
});


app.use("/campgrounds", campgroundRouter)
app.use("/register", registerRouter)

app.listen(3000, process.env.IP, () =>{
	console.log("Yelpcamp server is up");
})