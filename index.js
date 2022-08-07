function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}
function call() {
    let userChoice = prompt('Rock, paper or scissors?');
    return userChoice;
}
function game (){
    let userScore = 0;
    let compScore = 0;
do {
    playRound();
    count();
    function playRound() {

    let computerSelection = getComputerChoice();
    let playerSelection = call();
    if (playerSelection === computerSelection) {
        console.log("It's a tie. "+ playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1) + " ties with " + computerSelection)
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper') {
            userScore++; console.log("You win! " + playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection)
            }
    else {
        compScore++; console.log("You lose! " + computerSelection.slice(0,1).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection)
    }
        console.log(userScore, compScore)
    return;
}
}
while(userScore < 5 && compScore != 5);
function count() {
    if (userScore == 5) 
    console.log('You win the game!');
else if (compScore == 5) 
    console.log('You lose the game!');
}
}
game()
