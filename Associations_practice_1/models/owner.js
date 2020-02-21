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

let ownerSchema = new mongoose.Schema({
	name:String
}),
	Owner = new mongoose.model("owner", ownerSchema);

module.exports = {
	ownerSchema:ownerSchema,
	Owner:Owner
}