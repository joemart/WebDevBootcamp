const fs = require("fs"),
	  util = require("util"),
	  request = require("request");
 

// {
// 	let a = new Promise((res,rej)=>{
// 	 // res();
// 	 rej(2);
//  });
 
// 	a.then(x=>{
// 		console.log("first then");
// 		if(x==1)
// 			{	
// 				console.log(x);
					

// 			}
// 		return x;
		
//  })
//  .catch(x=>{
// 		console.log("first catch");
//  if(x==1)
//  {	
//  console.log(x) 
 

//  }
		
// 	return x;
//  })
// 	.then(x=>{
		
// 		if(x==2)
// 			{	
// 				console.log(x); 
// 					return x;

// 			}
//  })
// 	 .catch(x=>{
// 		if(x==2)
// 			{	
// 				console.log(x) 
// 					return

// 			}
//  });
// }

// var a = (x) => console.log(x)
// var b = util.promisify(a)

// b().
// then(x=>console.log("yes")).
// catch(x=>console.log("no"));

//using util in a request
// var rq = util.promisify(request);

// rq("http://www.google.comsdflksdfl")
// .then(x=>{
// 	console.log(x.body)
// })

//promises with util
//using util in a readfile
// var read = util.promisify(fs.readFile);

// read("./hello.txt")
// .then(x=>{
// 	console.log(x.toString())
// })

//Async functions are put in the callback queue
var x1 = async () =>  console.log(1)
var x2 =  async (x) =>   console.log(x)
setTimeout(()=>{console.log(0)})
x1()  
// x2(1)
console.log(3)

// console.log(3434);
console.log(x1[Symbol.toStringTag]) //checks the type, if it's an Async function
console.log(x2[Symbol.toStringTag])



var r = util.promisify(fs.readFile)
for(let i = 0; i<10; i++)
	{
	// 	x2(i)
	// r("hello.txt").then(x=>console.log(x.toString()))
	}
	
r("hello.txt").then(x=>console.log(x.toString()))
console.log("world")