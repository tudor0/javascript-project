const result = document.querySelector("#result");
let i = 0;

// This function is called whenever a button is pressed, besides the "C" and "="

function display(num) {
  // The first input can only be a number / or the "-" sign
  if (i === 0) {
    if (num == "+" || num == "/" || num == "." || num == "*") {
      console.log("You need to add a number as the first input");
      return 0;
    } else result.value = result.value + num;
  } else {
    // This checks if two consecutive inputs are signs, and prevents that from happening
    const lastChar = result.value.charAt(i - 1);

    if (
      lastChar == "+" ||
      lastChar == "-" ||
      lastChar == "/" ||
      lastChar == "*" ||
      lastChar == "."
    ) {
      if (num == "+" || num == "/" || num == "." || num == "*" || num == "-") {
        console.log("You need to input a number after a sign");
        return 0;
      }
    }
    result.value = result.value + num;
  }
  i++;
}

// This function clears the screen of any previous inputs

function clearScreen() {
  result.value = "";
}

// This function provides to answer to the ecuation, when clicking the "=" button

function calculate() {
  i = 0;
  const evaluate = parse(result.value);
  if (evaluate == 0) {
    result.value = "";
    i = 0;
  } else {
    result.value = evaluate;
    i = evaluate.toString().length;
  }
}
function parse(str) {
  return Function(`'use strict'; return (${str})`)();
}
