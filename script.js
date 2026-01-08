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
  let answer = prompt("Please select 'rock', 'paper' or 'scissors'");
  answer = answer.toLowerCase();
  return answer;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerChoice++;
    console.log("Unlucky" + `${computerChoice} beats ${humanChoice}`);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanChoice++;
    console.log("Well done! " + `${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanChoice++;
    console.log("Well done! " + `${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerChoice++;
    console.log("Unlucky" + `${computerChoice} beats ${humanChoice}`);
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerChoice;
    console.log("Unlucky" + `${computerChoice} beats ${humanChoice}`);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanChoice++;
    console.log("Well done! " + `${humanChoice} beats ${computerChoice}`);
  } else {
    console.log("This round is a draw!");
  }
}

function playGame() {
  let humanChoice;
  let computerChoice;
  for (let i = 5; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  if (humanChoice > computerChoice) {
    console.log("You win!");
  } else if (computerChoice > humanChoice) {
    console.log("You lose!");
  } else {
    console.log("Draw");
  }
}
