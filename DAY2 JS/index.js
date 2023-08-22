const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput
  } else {
    console.log('ERROR 404')
  }
}

//getUserChoice('www')

const getComputerChoice = () => {
  let x = Math.floor(Math.random() * 3)
    switch(x) {
    case 0: return 'rock'
    break

    case 1: return 'paper'
    break

    case 2: return 'scissors'
    break
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock'); 
  const computerChoice = getComputerChoice();
  console.log(`Your choice: ${userChoice}`);
  console.log(`Computer's choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

const userChoice = getUserChoice('bomb');
console.log(`Your choice: ${userChoice}`);
console.log("Computer's choice: Will it be a surprise?");
console.log('You win! The secret cheat code works!');

playGame();





















