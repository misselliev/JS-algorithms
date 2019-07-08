//Write a function that accepts a number and adds up all the numbers from 0 to the given number.

function recursionRange(number) {
  var copy = number;
  if (copy < 1) {
    return 0;
  }
  return number + recursionRange(number - 1);
}

console.log(recursionRange(6)) // 21
console.log(recursionRange(10)) // 55