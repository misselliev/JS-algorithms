function countdown(number) {
  if (number <= 0) {
    console.log("End!");
    return;
  }
  console.log(number);
  number--;
  countdown(number);
}
