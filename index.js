const updatescore = document.getElementById("score");
const question = document.getElementById("question");
const UserAnswer = document.getElementById("answer");
const form = document.getElementById("form");

const number1 = Math.ceil(Math.random() * 10);
const number2 = Math.ceil(Math.random() * 10);

let score = JSON.parse(localStorage.getItem("score"));
if (!score) score = 0;

question.innerText = `What is ${number1} multiplied by ${number2}?`;
updatescore.innerText = `Score: ${score}`;

const CorrectAnswer = number1 * number2;

form.addEventListener("submit", () => {
  let answer = +UserAnswer.value;
  if (answer === CorrectAnswer) {
    score += 1;
    console.log(score);
    Updatescore();
  } else {
    score -= 1;
    Updatescore();
  }
});

function Updatescore() {
  localStorage.setItem("score", score);
}
