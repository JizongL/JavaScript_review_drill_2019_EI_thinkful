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

