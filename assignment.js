// Variables, Data Types, and Operators Task: Pay Calculator v1

// Create a "pay calculator" to determine how much money someone has made. 
// Overtime is NOT taken into account.
// 1) Declare a variable called 'hoursWorked' and assign it the value of 35.
// 2) Declare a second variable called 'payRate' and assign it the value of 7.25. 
// 3) Next, declare a variable called 'totalPay', and use an operator to give it the value of the hoursWorked multiplied by the payRate.
// 4) Lastly, display 'totalPay' in the console. The output should be 253.75!


// let hoursWorked = 45;
// let payRate = 7.25;
// let totalPay = hoursWorked * payRate;
// let overTimePayRate = payRate * 1.5;

// if(hoursWorked > 40){
//     totalPay = ((hoursWorked - 40) * overTimePayRate) + (40 * payRate);
//     console.log(totalPay);
// }
// else{
//     console.log(totalPay);    
// }




// for(let i = 1; i <= 5; i ++){
//     console.log(i)
// }

// let word = prompt("Type a word")

// for(let i = 0; i < word.length; i++){
//     console.log(word[i])
// }


// Functions

// function addTwoNumbers(one, two){
//     let result = one + two;
//     return result;
// }

// function subtractTwoNumbers(one, two){
//     let result = one - two;
//     return result;
// }

// function threeNumbers(one, two, three){
//     let result = (one * two)/three;
//     return result;
// }

// function runCalculations(){
//     let sum = addTwoNumbers(54, 67);
//     console.log(sum);
//     let diff = subtractTwoNumbers(7, 4);
//     console.log(diff);
//     let third = threeNumbers(5, 7, 2);
//     console.log(third)
// }

// runCalculations();


// Arrays
// this function should add up all of the odd numbers in the array for a "grand total", and return that total
function array(array){
    variable = 0
    for(let index = 0; index < array.length; index ++){
        if(array[index] % 2 == 0){
            
        }
        else{
            variable += array[index]
        }
    }
    console.log(variable);
    return variable;
}

let arrayTest = [6, 7, 13, 14, 15]

array(arrayTest)