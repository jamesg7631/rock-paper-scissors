let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return answer;
}

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  if (humanChoice === "rock" && computerChoice === "paper") {
    return -1;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    return 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    return 1;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    return -1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    return -1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    return 1;
  } else {
    return 0;
  }
}

const btn = document.querySelector(".choice-btn");
btn.addEventListener("click", function (e) {
  let result = playRound(e.target.value);
  if (result >= 1) {
    humanScore += 1;
  } else if (result <= -1) {
    computerScore += 1;
  }
  updateScore();
  showResult(result);
});

const updateScore = () => {
  const humanSpan = document.querySelector(".human-score");
  const computerSpan = document.querySelector(".computer-score");
  humanSpan.textContent = `Human Score: ${humanScore}`;
  computerSpan.textContent = `Computer Score: ${computerScore}`;
};

const showResult = (winner) => {
  const resultSpan = document.querySelector(".result-text");
  if (winner >= 1) {
    resultSpan.textContent = "Player won this round!";
  } else if (winner === 0) {
    resultSpan.textContent = "This round ended as a draw";
  } else {
    resultSpan.textContent = "Computer won this round";
  }
};
