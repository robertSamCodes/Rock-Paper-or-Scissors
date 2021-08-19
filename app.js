const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
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

console.log(getComputerChoice())