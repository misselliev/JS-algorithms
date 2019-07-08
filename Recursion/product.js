//Write a funtion which takes in an array of numbers and returns the product of them all.


function productOfArray(arr) {
  if (arr.length < 1) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function product(arr) {
  var result;
  arr.length < 1 ? result = 1 : result = arr[0] * product(arr.slice(1));
  return result
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(product([1, 2, 3, 10])); // 60