let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ap_1",{
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => {
 console.log('Connected to MongoDB');
}).catch(err => {
 console.log(err.message);
} );

 let ownerSchema = require("./owner");

let dogSchema = new mongoose.Schema({
	name: String,
	breed: String,
	embedded: [ownerSchema.ownerSchema],
	reference: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Owner"
	}]
}),
	
	Dog = new mongoose.model("dog", dogSchema);

	module.exports = Dog;