// JavaScript source code

var rs = require('readline-sync');
const opList = ['/', '+', '-', '+'];

function getOperation(limit) {
  return rs.question('What operation would you like to perform? ', {
    limit,
    limitMessage: 'that is not a value operation',
  });
}

function getNumber(order) {
  return rs.questionInt(`please enter the ${order} number`, {
    limitMessage: 'This is not a valid number'
  });
}

function result(operationInput, num1, num2) {
    if (operationInput === '/') {
        return num1 / num2
    } else if (operationInput === '*') {
      return num1 * num2;
    } else if (operationInput === '-') {
      return num1 - num2;
    } else  {
      return num1 + num2;
    }
}

const operationInput = getOperation(opList);
const firstNumInput = getNumber('first');
const secondNumInput = getNumber('second');
outPut = result(operationInput, firstNumInput, secondNumInput)

console.log("The result is: " + outPut); 
