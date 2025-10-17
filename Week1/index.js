console.log("hello, world");
// const num1 = 5;
// const num2 = 3;

// // add two numbers
// const sum = num1 + num2;

// // display the sum
// console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

const prompt = require(`prompt-sync`)();
console.log("starting")
const name = prompt(`Enter your name: `);
console.log(`Hello, ${name}`);

const number = parseInt(prompt("Enter a number: "));

if (number > 0) {
    console.log("The number is positive");
}

else if (number = 0) {
    console.log("The number is zero");
}

else {
    console.log("The number is negative");
}

const num1 = parseInt(prompt("Enter first number: "));
const num2 = parseInt(prompt("Enter second number: "));

const operation = prompt("Enter your operation: ");

if (operation == "+"){
    console.log(num1 + num2);
}

else if (operation == "-"){
    console.log(num1 - num2);
}

else if (operation=="*"){
    console.log(num1*num2);
}

else if (operation=="/") {
    console.log(num1/num2);
}
