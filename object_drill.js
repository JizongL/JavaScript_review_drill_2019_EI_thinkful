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

// Factory Function Drill
function createCharacter(name,nickname,race,origin,attack,defense,weapon){
	return {
	name: name,
	nickname:nickname,
	race: race,
	origin: origin,
	attack: attack,
	defense: defense,
	weapon:weapon,
	// added weapon in description
	describe: function(){
		console.log(`\n${this.name} is a ${this.race} of ${this.origin} who uses ${weapon}\n`);
	},
	evaluateFight: function(character){
		return `Your opponent takes ${character.attack-character.defense} damage and you receive ${this.attack-this.defense} damage`
	}

}}

let characters = [createCharacter('Gandalf the White','gandalf', 'Wizard','Middle Earth',10,6,'the Ring')]

characters.push(createCharacter('Bilbo Baggins','bilbo','Hobbit','The Shire', 2,1,"String and Barrow Blade"));

characters.push(createCharacter('Frodo Baggins','frodo','Hobbit','The Shire',3,2,"Anduril"));

characters.push(createCharacter('Aragorn son of Arathorn','aragorn','Man','Dunnedain',6,8,"Bow and Arrow"));

characters.push(createCharacter('Legolas','legolas','Elf','Woodland Realm',8,5,"Hadhafang"));

console.log("\nCompare it with another Character:\n",characters[1].evaluateFight(characters[0]));

console.log("\nLog out all characters in array:\n",characters)

// Using .find() character nicknamed aragorn and call his describe method.
characters.forEach(character=>character.describe());

characters.find(character => character.nickname==='aragorn').describe();
// filter out characters that are Hobbit
console.log("\nCharacters that are Hobbit\n",characters.filter
(character=>character.race==='Hobbit'))
// filter out characters whose attack level is above 5
console.log("\nCharacters that have attack value above 5\n",characters.filter
(character=>character.attack>5))

// A Database Search

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];
  //findOne() takes two arguments, arr,query
  // first match result should be returned even if multiple match. 
  function findOne(arr,query){
      // obstract keys out of HEROES
      let queryKey = Object.keys(query);
      // if there is only 1 key, return its match, if not return null
      if (queryKey.length===1){
          if(arr.find( hero => hero[queryKey]===query[queryKey])){
              return arr.find( hero => hero[queryKey]===query[queryKey])
          } else {
              return null;
          }
      // else if there is more than 1 key, match them all and return the right
      // query item, if no match, return null    
      } else if (queryKey.length===2){
          if(arr.find( hero => hero[(queryKey[0])]===query[(queryKey[0])]
          && hero[(queryKey[1])]===query[(queryKey[1])])){
              return arr.find( hero => hero[(queryKey[0])]===query[(queryKey[0])]
          && hero[(queryKey[1])]===query[(queryKey[1])])
          }else{return null};
      }
  }
  
  
  // find the first match, if not return null
  
  console.log(findOne(HEROES, { id: 1 }));
  // => { id: 1, name: 'Captain America', squad: 'Avengers' }
  
  console.log(findOne(HEROES, { id: 10 }));
  // => null
  
  console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
  // => null
  
  console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
  // => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }
  
  console.log(findOne(HEROES, { squad: 'Justice League' }));
  // => { id: 4, name: 'Superman', squad: 'Justice League' }

