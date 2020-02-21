var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app",{
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => {
 console.log('Connected to MongoDB');
}).catch(err => {
 console.log(err.message);
} ); //cat_app is the database

var catSchema = new mongoose.Schema(
	{
		name:String,
		age:Number,
		temperament:String
	});

var dogSchema = new mongoose.Schema({
	name:String
});

var Cat = mongoose.model("Cat", catSchema);
var dog = mongoose.model("dogkjlkjl", dogSchema);

var new_dog = new dog({
	potato:"hello"
});

new_dog.save((err,item)=>{
	if(err){
		console.log(err);
	}
	else console.log(item);
});

//add a cat to the DB

// var george = new Cat({
// 	name:"Mrs. Norris",
// 	age:7,
// 	temperament: "Evil"
// });

// george.save((err, item)=>{
// 	if(err)
// 		console.log(err);
// 	else 
// 		console.log(`${item} was saved!`);
// });

//retrieve all cats from db and console.log each one

// Cat.find({}, (err,item)=>
// 		 {
// 		if(err)
// 		 console.log(`${err}, oh no error!`)
// 		  else
// 		{
// 			console.log(`${item}, the cats!!`)
// 		}
// 		 });


//new and save

// Cat.create({
// 	name:"Snow white",
// 	age:15,
// 	temperament:"Bland"
// }, (err, item) => {
// 	if(err)
// 		console.log(`${err}, OH NO`)
// 	else
// 		console.log(`${item}`)
// });