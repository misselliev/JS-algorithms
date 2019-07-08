//Using recursion to mimic Math.pow()

function power(number, base) {
  if (base <= 0) {
    return 1;
  } else {
    return number * power(number, base - 1)
  }
}

//Using ternary operator
function powerShort(number, base) {
  var result;
  base > 0 ?
    result = number * powerShort(number, base - 1) : result = 1;
  return result;
}

console.log(power(2, 2));