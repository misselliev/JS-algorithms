//Write a function that accepts a number and returns the factorial of it. 

function factorial(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(4));
//should output 24

function factorialShort(number) {
  var result;
  number <= 1 ? result = 1 : result = number * factorialShort(number - 1);
  return result;
}

console.log(factorialShort(4));