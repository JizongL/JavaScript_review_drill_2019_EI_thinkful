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