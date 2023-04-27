function incrementScore (){
  playerScore += 1;
  playerScoreElement.textContent = `Your score: ${playerScore}`;
  if (playerScore == 5){
    playerScoreElement.textContent = "Wowzers you won!";
    buttons.forEach( key => key.removeEventListener(('click'), game));
  }
}

function incrementComputerScore (){
  computerScore += 1;
  computerScoreElement.textContent = `Enemy score: ${computerScore}`;
  if (computerScore == 5){
    computerScoreElement.textContent = "...You really lost to a bot...";
    buttons.forEach( key => key.removeEventListener(('click'), game));
  }

}

function getComputerChoice (){
  let rand_num = Math.floor(Math.random() * 3);
  switch (rand_num){
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound (player1, computer){
  let player = player1.toLowerCase();

  if (player == 'rock'){
    if (computer == 'rock'){
      return "Tie!";
    }
    else if (computer == 'paper'){
      incrementComputerScore();
      return "You lose :( Paper beats rock";
    }else{
      incrementScore();
      return "You win! Rock beats scissors";
    }
  }

  if (player == 'paper'){
    if (computer == 'paper'){
      return "Tie!";
    }
    else if (computer == 'scissors'){
      incrementComputerScore();
      return "You lose :( Scissors beats paper";
    }else{
      incrementScore();
      return "You win! Paper beats rock";
    }
  }

  if (player == 'scissors'){
    if (computer == 'scissors'){
      return "Tie! Scissors ties with scissors";
    }
    else if (computer == 'rock'){
      incrementComputerScore();
      return "You lose :( Rock beats scissors";
    }else{
      incrementScore();
      return "You win! Scissors beats paper";
    }
  }

}

function game(event){

  computerSelection = getComputerChoice();
  playerSelection = event.target.parentElement.id;
  console.log(playRound(playerSelection, computerSelection));

}

var playerScore = 0;
var computerScore = 0;
const buttons = document.querySelectorAll('button');
const playerScoreElement = document.querySelector('.scores #player p');
const computerScoreElement = document.querySelector('.scores #computer p');
buttons.forEach( key => key.addEventListener(('click'), game));
