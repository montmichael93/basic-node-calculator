// JavaScript source code

var rs = require('readline-sync');

var operator;
var firstNumber;
var secondNumber;
var operationInput;
var firstNumInput;
var secondNumInput;


function getOperation() {
    while (true) {
        operator = rs.question('What operation would you like to perform? ');
        if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
            return operator;
        } else {
            console.log('That is not a valid operation');
            operator = rs.question('What operation would you like to perform? ');
            console.log('That is not a valid operation');
        }
    }


}

operationInput = getOperation();

//console.log(operationInput)

function getFirstNumber() {
  while(true) {
    firstNumber = rs.question("Please enter the first number ")
    if (isNaN(Number(firstNumber)) || firstNumber === '') {
        console.log('This is not a number')
        firstNumber = rs.question("Please enter the first number ")
        console.log('This is not a number')
    } else {
        return Number(firstNumber)
    }
  }
}

firstNumInput = getFirstNumber();


//console.log(firstNumInput)

function getSecondNumber() {
  while (true) {
    secondNumber = rs.question("Please enter the second number ")
    if (isNaN(Number(secondNumber)) || secondNumber === '') {
      console.log('This is not a number')
      secondNumber = rs.question("Please enter the second number ")
      console.log('This is not a number')
    } else {
      return Number(secondNumber)
    }
  }
}

secondNumInput = getSecondNumber();

 //console.log(secondNumInput)

function result(num1, num2) {
    let answer = 0;

    if (operationInput === '/') {
        answer = num1 / num2
    } else if (operationInput === '*') {
        answer = num1 * num2;
    } else if (operationInput === '-') {
        answer = num1 - num2;
    } else if (operationInput === '+') {
        answer = num1 + num2;
    }
    return answer

}

outPut = result(firstNumInput, secondNumInput)

console.log("The result is: " + outPut);
