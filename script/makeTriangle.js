let userInput = document.querySelectorAll(".angle-input");
let button = document.querySelector("#istriangle");
let outputmsg = document.querySelector("#output-massage");

function calculatesum(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}

function checkIsTriangle() {
  let a1 = Number(userInput[0].value);
  let a2 = Number(userInput[1].value);
  let a3 = Number(userInput[2].value);
  let sumofthreeangles = calculatesum(a1, a2, a3);
  console.log(sumofthreeangles);
  if (sumofthreeangles === 180) {
    showOutput("This angles makes Triangle");
  } else {
    showOutput("This angles doesn't form Triangle");
  }
}

function showOutput(msg) {
  outputmsg.innerText = msg;
}

button.addEventListener("click", checkIsTriangle);
