// Object Drills
// Object initializers and methods
loaf = {
    flour:300,
    water:210,
};
// log out flour and water property
console.log(loaf.flour,loaf.water)
// add an empty method called hydration
loaf['hydration']="";

loaf.hydration= function(){
        return this.water/100};

console.log(loaf.hydration())        

// Iterating over object property

let objectA = {
    foo:12, 
    bar:30, 
    fum:21, 
    quux:45,
    spam:33
}

// objectA.object doesn't seem to work.
for(object in objectA){
    console.log(objectA[object])
}

// Arrays in objects
let objectB = {
    meals:['breakfast','second breakfast','elevenses','lunch','afternoon tea','dinner'/
    'supper']
}
console.log(objectB.meals[3]);

//Arrays of objects
// Create 3-5 objects with name and jobTitle
// sotre them into an array and iterate through them with console.log
let objectOne = {
    name:'John',
    jobTitle:'Teacher'
};

let objectTwo = {
    name:'Miller',
    jobTitle:'Chef'
};
let objectThree = {
    name:'Josh',
    jobTitle:'Coach'
};
let objectFour = {
    name:'Angel',
    jobTitle:'Student'
};

let objectArray = [objectOne,objectTwo,objectThree,objectFour];

for (object of objectArray){
    console.log(`Name: ${object.name}\nJob title: ${object.jobTitle}`);
}

// Properties that aren't there

let hrArray = [
    {
        name:'John',
        title:'Technician',
        boss:'Tmm'
    },
    {
        name:'Taylor',
        title:'Secretary',
        boss:'Tmm'
    },{
        name:'Joyce',
        title:'Sales Manager',
        boss:'Tmm'
    },{
        name:'tmm',
        title:'Owner'
    }
]

// iterate through
for (person of hrArray){
    // adjust if it is the owner, then report ot nobody
    if(person.title==='Owner')console.log(`Founder\
	${person.name} doesn't report to anybody`) 
	else console.log(`${person.title} ${person.name} reports to ${person.boss}.`);
}

// Cracking the code object version 
// decode() takes two arguments,message and cipher
function decode(message,cipher){
    // turn string into list
	let decodeList = message.split(' ');
    // placeholder for decoded string
    let decoded = '';
        // iterate through 
		for( word of decodeList){
			// console.log(word,word[0],cipher[word[0]]);
            // if first letter of word is in cipher, concat the respective
            // letter according to the cipher
            if (word[0] in cipher)decoded+=word[cipher[word[0]]-1]
            // if not in the cipher, just return a space
            else decoded+=" "
			
		}	
	return decoded;
}
// cipher object
let cipher ={
	a:2,
	b:3,
	c:4,
	d:5
}

let message = 'craft block argon meter bells brown croon droop'

console.log(decode(message,cipher));

