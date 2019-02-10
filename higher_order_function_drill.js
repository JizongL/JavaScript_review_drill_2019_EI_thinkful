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