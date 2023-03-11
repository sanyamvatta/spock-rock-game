import { startConfetti,removeConfetti } from "./confetti.js"
startConfetti();

const playerScoreEl = document.getElementById('player-score')
const playerChoiceEl = document.getElementById('player-choice')
const computerChoiceEl = document.getElementById('computer-choice')
const computerScoreEl = document.getElementById('computer-score')
const resultText = document.getElementById('resultText')

const playerRock = document.getElementById('playerRock')
const playerPaper = document.getElementById('playerPaper')
const playerScissors = document.getElementById('playerScissors')
const playerLizard = document.getElementById('playerLizard')
const playerSpock = document.getElementById('playerSpock')

const computerRock = document.getElementById('computerRock')
const computerPaper = document.getElementById('computerPaper')
const computerScissors = document.getElementById('computerScissors')
const computerLizard = document.getElementById('computerLizard')
const computerSpock = document.getElementById('computerSpock')

const allGameIcons = document.querySelectorAll('.far')

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

// Reset all icons
function resetSelected(){
  removeConfetti()
  allGameIcons.forEach(icon => icon.classList.remove('selected'));
}

let playerScoreNumber = 0;
let computerScoreNumber = 0;

let computerChoice = '';

// Choose random
function computerRandomChoice(){
  const computerChoiceNumber = Math.floor(Math.random() *4) + 1;
  switch(computerChoiceNumber){
    case 1:
      computerChoice = 'rock'
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 2:
      computerChoice = 'paper'
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 3:
      computerChoice = 'scissors'
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 4:
      computerChoice = 'lizard'
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 5:
      computerChoice = 'spock'
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
  
}
// Check result, increase score and update result text
function updateScore(playerChoice){
  if(playerChoice == computerChoice){
    resultText.textContent = 'It\'s a tie';
  }else{
    if(choices[playerChoice].defeats.includes(computerChoice)){
      startConfetti()
      resultText.textContent = `You win`;
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber
    }else{
      resultText.textContent = `you lose`;
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber
    }
  }
}

// Call all other function to return result
function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  updateScore(playerChoice);
}

// Creating select function

function select(playerChoice){
  checkResult(playerChoice);
  switch(playerChoice){
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}
window.select = select

function resetAll(){
  resetSelected();
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  playerScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
}
window.resetAll = resetAll;
// ONload, set initial value
resetAll();