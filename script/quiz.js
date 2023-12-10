let form = document.querySelector("form");
let button = document.querySelector("#submit");
let output = document.querySelector("#output");

const correctAnswer = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a+b+c",
  "no",
  "45°",
];

function calculateScore() {
  let score = 0;
  let index = 0;
  let data = new FormData(form);
  for (let value of data.values()) {
    if (value === correctAnswer[index]) {
      score++;
    }
    index++;
  }
  output.innerText = `Your Score is ${score}`;
}

button.addEventListener("click", calculateScore);
