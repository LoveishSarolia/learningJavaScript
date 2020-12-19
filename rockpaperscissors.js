const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }
  // since there is an early return on L4, there is no need for an else, it is considered
  // best practice to return early and avoid the use of `else` whenever possible
  // this principle could be applied throughout this example
  // this is not necessarily applicable to `else if`
  console.log("There was an error in your answer, please enter 'rock', 'paper', or 'scissors'.");
}

//console.log(getUserChoice('SCiSsors'));

const getComputerChoice = () => {
  const randNum = Math.floor(Math.random() * 3);
  if(randNum === 0) {
    return 'rock';
  } else if(randNum === 1) {
    return 'paper';
  } else if(randNum === 2) {
    return 'scissors';
  }
 }

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice.toLowerCase() === computerChoice.toLowerCase()) {
    return 'The game is a tie.';
  }
  if(userChoice.toLowerCase() === 'rock') {
    if(computerChoice.toLowerCase() === 'paper') {
      return 'The computer won the game.';
    } else {
      return 'The user won the game.';
    }
  }
  if(userChoice.toLowerCase() === 'paper') {
    if(computerChoice.toLowerCase() === 'scissors') {
      return 'The computer won the game.';
    } else {
      return 'The user won the game.';
    }
  }
  if(userChoice.toLowerCase() === 'scissors') {
    if(computerChoice.toLowerCase() === 'rock') {
      return 'The computer won the game.';
    } else {
      return 'The user won the game.';
    }
  }
  if(userChoice.toLowerCase() === 'bomb') {
    return 'The user won the game.';
  }
}

//console.log(determineWinner('scissors', 'rock'));

const playGame = (userChoice, computerChoice) => {
  userChoice = getUserChoice('bomB');
  console.log('You chose:', userChoice);
  computerChoice = getComputerChoice();
  console.log('Computer chose:', computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
