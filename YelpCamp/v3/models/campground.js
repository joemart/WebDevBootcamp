let mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/yelpcamp",{
// 	useNewUrlParser: true, 
// 	useUnifiedTopology: true,
// 	useFindAndModify: false,
// 	useCreateIndex: true
// }).then(() => {
//  console.log('Connected to MongoDB');
// }).catch(err => {
//  console.log(err.message);
// } );

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	comments: [
				{
					type: mongoose.Schema.Types.ObjectId,
						ref: "comment"
				}
	]
});

var campground = mongoose.model("campground", campgroundSchema);

module.exports = campground;