let userInput = document.querySelectorAll("#sides");
let button = document.querySelector("#calculate-button");
let output = document.querySelector("#output");

function AreaOfTriangle() {
  let value1 = Number(userInput[0].value);
  let value2 = Number(userInput[1].value);
  let value3 = Number(userInput[2].value);

  // formula:
  // semiperimeter  of triangle(s) = a+b+c/2
  // area fo triangle = √s(s-a)(s-b)(s-c)

  let semiperimeter = (value1 + value2 + value3) / 2;
  let areaOfTriangle = Math.sqrt(
    semiperimeter *
      (semiperimeter - value1) *
      (semiperimeter - value2) *
      (semiperimeter - value3)
  ).toFixed(4);
  output.innerText = `Area of a triangle using heron's formula is ${areaOfTriangle} units`;
}

button.addEventListener("click", AreaOfTriangle);
