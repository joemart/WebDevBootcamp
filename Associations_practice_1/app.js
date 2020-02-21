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

let	Owner = require("./models/owner"),
 	Dog = require("./models/dog");
	


let newOwner = new Owner.Owner({
	name:"Fred"
});
	newOwner.save((err,data)=>{
		if(err)console.log(err)
		else console.log(data)
	});

let newDog = new Dog({
	name: "Bucky",
	breed: "Labrador"
});
	newDog.save((err,data)=>{
		if(err)console.log(err)
		else console.log(data)
	});


// 	Dog.findOne({name:"Bucky"}, (err,foundDog)=>{
// 		if(err)console.log(err)
// 		else
// 			{
// 				foundDog.embedded.push({
// 				name:"Glasses"
// 				});
// 				foundDog.save((err,data)=>{
// 					if(err)console.log(err)
// 					else console.log(data)
// 				});
// 			}
// 	})

// let newOwner = new Owner({
// 	name:"Jerry"
// });
// newOwner.save((err,newUser)=>{
// 	if(err)console.log(err)
// 	else
// 		{
// 			Dog.findOne({name:"Bucky"}, (err,foundDog)=>{
				
// 				if(err)console.log(err)
// 				else{
// 						foundDog.reference.push(newUser);
// 						foundDog.save((err,data)=>{
// 							if(err)console.log(err)
// 							else console.log(data)
// 						});
// 				}
			
// 			});
// 		}
// });

Dog.findOne({name:"Bucky"}).populate("posts").exec((err,dog)=>{
	if(err)console.log(err)
	else console.log(dog)
});