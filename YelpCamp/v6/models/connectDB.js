let mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/yelpcamp_v4",{
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => {
 console.log('Connected to MongoDB');
}).catch(err => {
 console.log(err.message);
});
module.exports = mongoose