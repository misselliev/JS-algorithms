//Write a function that accepts a string and returns a new string in reverse.

function reverse(word) {
  if (word === "") {
    return "";
  } else {
    return reverse((word.substr(1))) + word.charAt(0);
  }
}

//substr() returns the characters starting from the index number you give it
//charAt() returns the character of given index from a string 

console.log(reverse("hola")); //aloh