//Write a function that returns true if a string is palindrome

function isPalindrome(word) {
  var result;
  if (word === "") {
    return "";
  } else {
    var reversed = isPalindrome((word.substr(1))) + word.charAt(0);
  }
  if (reversed === word) {
    return true;
  } else {
    return false;
  }

}

// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true