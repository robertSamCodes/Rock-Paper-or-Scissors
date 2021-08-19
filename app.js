const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput ;
  }else{
    console.log("Sorry, invalid input")
  }
}

// Get computer choice
const getComputerChoice = () =>{
  let computerChoice = Math.floor(Math.random() * 2)

  if(computerChoice === 0){
    return 'rock'
  }else if (computerChoice === 1){
    return 'paper'
  }else{
    return 'scissor'
  }
}
// Determine winner

const determineWinner = (userChoice , computerChoice) =>{
  // Check for tie
  if (userChoice === computerChoice){
    return "Ooops, there was a tie!"
  }

  // If user chooses rock
  if(userChoice === 'rock' && computerChoice === 'paper'){
    return "Hey, computer won!"
  }else if (userChoice === 'rock' && computerChoice === 'scissors'){
    return "You have won , congrats!"
  }

  // If user chooses paper
  else if(userChoice === 'paper' && computerChoice === 'rock'){
    return "You won!"
  }else if(userChoice === 'paper' && computerChoice === 'scissors'){
    return "Computer won!"
  }

  // If user chooses scissors
  else if(userChoice === 'scissors' && computerChoice === 'rock'){
    return "Computer won!"
  }else if(userChoice === 'scissors' && computerChoice === 'paper'){
    return "You won!"
  }else if (userChoice === 'bomb'){
    return "You won"
  }
}


const playGame = () =>{
  let userChoice = getUserChoice('bomb');
  console.log(userChoice)
  let computerChoice = getComputerChoice('scissors')
  console.log(computerChoice)

  console.log(determineWinner(userChoice , computerChoice))
}

playGame()
//console.log(determineWinner('scissors=','paper'))