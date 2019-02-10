function createGreeting(name,age){
    // throw an error if either or both arguments are missing
    if (!name || !age){
        throw new Error("Arguments not valid")
    }
    const yearOfBirth = getYearOfBirth(age);
    return `My name is ${name} and I am ${age} years old\n 
I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age){
    // throw an error if age is negative. 
    if(age<0){
        throw new Error("Age can not be negative");
    }
    return 2019-age;
}

// if a negative age is entered, error will be thrown. 
// use try and catch blocks. 
try {
    const greeting1 = createGreeting("LJZ",100);
    console.log(greeting1);
} catch(e){
        console.log("something went wrong");
        console.dir(e);
}



