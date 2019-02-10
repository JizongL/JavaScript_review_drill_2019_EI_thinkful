function jediName(firstName, lastName){
    return lastName.slice(0,3)+firstName.slice(0,2);
}
console.log(jediName("John","Smith"));

function beyond(num){
    if(num ===-Infinity || num ===Infinity){
        console.log("And beyond");
    }
    else if(num < Infinity && num > 0) {
        console.log("To infinity");
    }
    else if(num > -Infinity && num < 0){
        console.log("To negative infinity");
    }
    else if(num===0){
        console.log("Staying home");
    }
};

beyond(Infinity);
beyond(-Infinity);
beyond(10);
beyond(-10);
beyond(0);
