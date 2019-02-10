function createGreeting(name,age){
    const yearOfBirth = getYearOfBirth(age);
    return `My name is ${name} and I am ${age} years old\n 
I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age){
    return 2019-age;

}
const greeting1 = createGreeting("LJZ",100);
console.log(greeting1);

