// Jedi name 
// jediName() function take two arguments
function jediName(firstName, lastName){
    // return first 3 leeters of last name and first 2 letters
    // of first name
    return lastName.slice(0,3)+firstName.slice(0,2);
}
console.log(jediName("John","Smith"));

// To infinity...

// beyond() function 
function beyond(num){
    // If infinite(+/-) log out 'And beyond'.
    if(num ===-Infinity || num ===Infinity){
        console.log("And beyond");
    }
    // If finite(+) log out 'To infinity'.
    else if(num < Infinity && num > 0) {
        console.log("To infinity");
    }
    // If finite(-) log out 'To negative infinity'.
    else if(num > -Infinity && num < 0){
        console.log("To negative infinity");
    }
    // If 0 log out 'Staying home'
    else if(num===0){
        console.log("Staying home");
    }
};

beyond(Infinity);
beyond(-Infinity);
beyond(10);
beyond(-10);
beyond(0);

// Cracking the code

//  All encoded has 5 letters
//  The first letter of each encoded word determines 
//  which of the remaining four characters contains the 
//  decoded character according according to the following key
//
// key => a:2 b:3 c:4 d:5
//
// e.g 'cycle' =>'l'.  'c' => "l" 


// If first letter isn't 'a', 'b', 'c', or 'd' 
// decoded to a space.

// decode handler
function decode(en_word){
	// key object
    let decodeKey = {
        a:2,
        b:3,
        c:4,
        d:5,
    }
	// if key is in object, return the decoded char 
	if(en_word[0] in decodeKey){
		return en_word[decodeKey[en_word[0]]-1];
	// else return a space	
	} else {
		return " ";
	}   
}

// main decoder function
function decoder(message){
	// split message into list of words
	let wordList = message.split(" ");
	// place holder for decoded 
	let decoded = [];
	// loop through the words and decode each one. 
	for (word of wordList){
		decoded.push(decode(word));
	}
	// return the result in str format(join them)
	return decoded.join("");
}
// test message 
let message = 'craft block argon meter bells brown croon droop'
decoder(message);

// console.log(decode('rycle'))
// console.log(decode('bells'))


// How many days in a month

// daysInMonth() function, to find out how many days in a specific month
// it takes two parameters month and optional leapYear
function daysInMonth(month,leapYear='false'){
    // use switch to sive through the months, and if month is not valid
    // print default message to prompt "invalid month", if leapYear and February
    // return 29 days, else return 28 days. 
    switch(month){
		case 'January':
		case 'February':
			if (leapYear) return `${month} has 29 days`
			else return `${month} has 28 days`
		case 'March':
		case 'May':
		case 'July':
		case 'August':
		case 'October':
		case 'December':
			return `${month} has 31 days`;
			break;
		case 'April':
		case 'June':
		case 'September':
		case 'November':
			return `${month} has 30 days`;
			break;
		default:
			return 'Must provide a valid month.'	
	}
}

daysInMonth("February",false)//=>`February has 29 days`


// Rock Paper Scissors

function rockPaperScissor(num){
    // if option is out of range throw an error
    if( num < 1 || num > 3){
		throw new Error("Option must be between 1 and 3");
    }
    // create computer random option 
    let computer = Math.floor(Math.random() * 3)+1;
	console.log('computer: '+computer)
    // If options are the same, it's a tie
    if (num === computer) return "It's a tie";
    // If option is even return normal, if it's odd, use mod operater
    // 3%3=0, so scissors is beated by rock. 
    if(num%2 === 0) return num > computer ? "You win!":"You lost:("
    else return num % 3 > computer % 3?"You win!":"You lost:(";
	
}




console.log(rockPaperScissor(1))

console.log(rockPaperScissor(2)) // => tbd
console.log(rockPaperScissor(4)) // => throw an error