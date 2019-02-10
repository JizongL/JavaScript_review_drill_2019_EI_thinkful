// Higher-order function drills
// repeat() function 
function repeat(fn,n){
    // loop through 5 times and call function 
	for (let i = 0;i < n; i++){
		fn();
	}
}

// hello() handler
function hello(){
	console.log("Hello world");
}

// goodbye() handler
function goodbye(){
	console.log("Goodbye world");
}

repeat(hello,5);
repeat(goodbye,5);


// Function as arguments 2
function filter(arr,fn) {
    // TASK: Define your function here
    let newArray=[];
    for (item of newArray){
        if(fn(item)){
            newArray.push(item);
        }
    }
    return newArray;
}

// Function as arguments 2
function filter(arr,fn) {
    // TASK: Define your function here
    let newArray=[];
    for (item of arr){
        if(fn(item)){
            newArray.push(item);
        }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// Bonus
console.log(myNames.filter( name => name[0]==='R'));


// function tells location of hazard and how many times // that hzard has issued an alert. 
function hazardWarningCreator(typeOfWarning){
	let warningCounter = 0;
	// function as return value
	return function(location){
		// warningCounter is available here because 
		// hazardWArningCreator() is its parent, so the // scope is inclusive. 

		warningCounter+=1;
		let times = "";
		// bonus for time and times
		if(warningCounter >=2 || warningCounter ===0)
		times = 'time(s)'
		else times = 'time';
		// logging messages
		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);

		console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`);

	};
}

// rocksWarning is pointed to the return of the 
// rocksWarning(),and its return is a function. 
// so, rockWarning is a secondary function
const rocksWarning = hazardWarningCreator('Rocks on the Road');

const iceWarning = hazardWarningCreator('Heavy ice is on the Road');

const snowWarning = hazardWarningCreator('Snow storm is hitting');

iceWarning('Jackson,MS')
rocksWarning('Main St and Pacific Ave');
rocksWarning('Main St and Pacific Ave');
snowWarning('Center City, Pa')


// forEach, filter and map

let turtlePath = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// remove backward steps or to the right.
const noBackOrRight = turtlePath.filter(element =>element[0]>=0 && element[1]>=0);

// count how may steps the turtle made during each 
// movement
const totalSteps = turtlePath.map(element => element[0]+element[1]);



// log out how many steps the turtle took in each case.
turtlePath.forEach(element => console.log(element[0]+element[1]));


// Questions
// for the last one using forEach()
// not sure if each case is referred to all the steps in every moment combined
// or total of each movement. 