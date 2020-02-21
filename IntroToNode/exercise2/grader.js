// var fs = require('fs');
// var readMe = fs.readFileSync(process.argv[2], 'utf8');
// // console.log(readMe);



//definition
let temp;

let average = scores => {
	
	temp = 0;
		scores.forEach(x => temp += x)
		
	  return Math.round(temp/scores.length);
	}




//execution
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40,65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));

	