function doSquareCalculation(number1, number2) {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
}

// function expression
const doSquareCalculation = function(number1, number2) {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
};

// Using a helper function 
const square = function(number) {
  return number * number;
};

const doSquareCalculation = function(number1, number2) {
  return square(square(number1) + square(number2));
};

// Arrow function 
const doSquareCalculation = (number1, number2) => {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
};

//The shorter function 
const doSquareCalculation = (number1, number2) => {
  const sum = number1 * number1 + number2 * number2;
  return sum * sum;
};

// Using a helper function 
const square = number => number * number;

const doSquareCalculation = (number1, number2) =>
    square(square(number1) + square(number2));

    