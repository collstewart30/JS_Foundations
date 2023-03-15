// programmig - management and movement of data

console.log("welcome to JS foundations");


// VARIABLES, DATA TYPES, AND OPERATORS
// - variables: used to store and manipulate data
// - data types: inform what you can and cannot do with a variable
// - operators: allows us to manipulate the values of variables, assign a new value to a variable, compare values of variables


let numberOne = 2;
let numberTwo = 3;

let sum = numberOne + numberTwo;
console.log(sum);
 
let firstName = "Colleen";
let lastName = "Stewart";

let fullName = firstName + " " + lastName;
console.log(fullName)

// Comparison operators

let myName = "Colleen";
let yourName = "Logan";
let areEqualNames = myName === yourName;
console.log(areEqualNames,"areEqualNames")

// Logical operators

// let age = 16;
// let isTeenager = age >= 13 && age <= 19;
// console.log(isTeenager)

let cash = 20;
let hasCreditCard = false;
let price = 25;
let canPurchase = cash >= price || hasCreditCard;
console.log(canPurchase, "canPurchase")

// multiple logical checks to create more complicated and restrictive operations

let age = 15;
let hasLearnersPermit = true;
let isWithParent = true;
let canDrive = age >= 16 || (hasLearnersPermit && isWithParent && age >= 15);
console.log(canDrive, "canDrive")

// ! returns the opposite value

let isStudent = false;
console.log("isStudent, ", isStudent);
isStudent = !isStudent;
console.log("!isStudent, ",isStudent);
console.log(!isStudent, "console.log(!isStudent)")


// Conditionals

let pokemon;
pokemon = "Pikachu";
if(pokemon === "Pikachu"){
    console.log("Pikachu, I choose you!")
}


// let petName = "Loki";
// if(petName === "Murdock"){
//     console.log("He's the orange cat")
// }
// else if(petName === "Loki"){
//     console.log("Loki is gray");;
// }

let petName = "Rowdy";
if(petName === "Murdock" || petName === "Loki"){
    console.log("Meow")
}
else{
    console.log("That pet isn't one of my cats...");
}


// let userInput = prompt("Which football team is the best?");

// if(userInput === "Bears"){
//     alert("Da Bears");
// }
// else if(userInput !== "Eagles"){
//     alert("That team's okay...");
// }
// else{
//     alert("Go Birds")
// }

// switch/case

// let userInput = prompt("Enter a number between 1 and 4")

// switch(userInput){
//     case "1":
//         console.log("Attacking!");
//         break;
//     case "2":
//         console.log("Defending!");
//         break;
//     case "3":
//         console.log("Evading!");
//         break;
//     default:
//         console.log("Whoops, try again!");
//         break;
// }



let revenue = 1000;
if(revenue >= 500){
    console.log("Made a profit!");
}
else if(revenue > 0 && revenue <= 499){
    console.log("At least we are still above 0!")
}
else{
    console.log("We made a loss!")
}


let bestFootballTeam = 'Eagles';

switch(bestFootballTeam){
    case "Eagles":
        console.log("best team in the world");
        break;
    case "Bears":
        console.log("boo");
        break;
    case "Packers":
        console.log("they will never win a Super Bowl");
        break;
    default:
        console.log("I guess you don't know much about football");
        break;
}

for(let i = 0; i < 10; i ++){
    console.log(i)
}