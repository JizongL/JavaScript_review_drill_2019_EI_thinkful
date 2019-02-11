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


for (person of hrArray){
    // adjust if it is the owner, then report ot nobody
    if(person.title==='Owner')console.log(`Founder\
	${person.name} doesn't report to anybody`) 
	else console.log(`${person.title} ${person.name} reports to ${person.boss}.`);
}
