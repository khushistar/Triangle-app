let userInput = document.querySelectorAll("#sides");
let button = document.querySelector("#calculate-button");
let output = document.querySelector("#output");

function calculateInputValue(input1, input2) {
  return input1 * input1 + input2 * input2;
}

function HypotenuseOfTriangle() {
  let a1 = Number(userInput[0].value);
  let a2 = Number(userInput[1].value);
  let returnvalue = calculateInputValue(a1, a2);
  console.log(returnvalue);
  let hypotenuse = Math.sqrt(returnvalue).toFixed(4);
  output.innerText = `The length of hypotenuse is ${hypotenuse}`;
}

button.addEventListener("click", HypotenuseOfTriangle);
