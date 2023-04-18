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
      return "You lose :( Paper beats rock";
    }else{
      return "You win! Rock beats scissors";
    }
  }

  if (player == 'paper'){
    if (computer == 'paper'){
      return "Tie!";
    }
    else if (computer == 'scissors'){
      return "You lose :( Scissors beats paper";
    }else{
      return "You win! Paper beats rock";
    }
  }

  if (player == 'scissors'){
    if (computer == 'scissors'){
      return "Tie! Scissors ties with scissors";
    }
    else if (computer == 'rock'){
      return "You lose :( Rock beats scissors";
    }else{
      return "You win! Scissors beats paper";
    }
  }

}

function game(){
  for (let i = 0; i < 5; i++){
    playerSelection = prompt("Enter rps choice:");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();