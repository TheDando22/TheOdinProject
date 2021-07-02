/*
 * Rock Paper Scissors game from The Odin Project - 
 * Author: Dan Wilder
 * Version: 1.0
 * Date: July 1st, 2021
*/

let choices = ["Rock", "Paper", "Scissors"];
let playerSelection = 0;
let computerSelection = 0;
let userScore = 0;
let computerScore = 0;
let drawScore = 0;
let counter = 1;

console.log(playerSelection);


function game() {

    function userInput() { 
        let userEntry = prompt("Enter a 0 for Rock, 1 for Paper, or 2 for Scissors", "0");
        // if ((userEntry !== 0) || (userEntry !== 1) || (userEntry !== 2)) {
        //     userEntry = prompt("That was not one of the choices. Please enter 0, 1, or 2", "0");
        // }
        playerSelection = choices[parseInt(userEntry)];
        return playerSelection;
    }

    function computerPlay() {
        let computerEntry = Math.floor(Math.random() * choices.length);
        computerSelection = choices[computerEntry];
        return computerSelection;
    }

    function playRound() {
        userInput();
        computerPlay();
        console.log("Round " + counter +"\n" + "User: " + playerSelection + "\nComputer: " + computerSelection);

        // If user enteres 0
        if (playerSelection === "Rock") {
            if (computerSelection === "Rock") {
                console.log("Draw!");
                drawScore++;
            }
            if (computerSelection === "Paper") {
                console.log("Paper beats rock. Computer Wins!");
                computerScore ++;
            }
            if (computerSelection === "Scissors") {
                console.log("Rock beats Scissors. You Win!");
                userScore++;
            }
        }

        // If user enters 1
        if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                console.log("Paper Beats Rock. You win!");
                userScore++;
            }
            if (computerSelection === "Paper") {
                console.log("Draw!");
                drawScore ++;
            }
            if (computerSelection === "Scissors") {
                console.log("Scissors beats paper. Computer Wins!");
                computerScore++;
            }
        }

        // If user enteres 2
        if (playerSelection === "Scissors") {
            if (computerSelection === "Rock") {
                console.log("Rock Beats Scissors. Computer wins!");
                computerScore++;
            }
            if (computerSelection === "Paper") {
                console.log("Scissors beats rock. You win!");
                userScore ++;
            }
            if (computerSelection === "Scissors") {
                console.log("Draw!");
                drawScore++;
            }
        }
    }

    for (let i = 0;i < 5; i++) {
        playRound();
        counter++;
    }

    console.log("Results:\n" + "---------\n" + "Times you won: " + userScore + "\nTimes computer won: " + computerScore + "\nTimes there was a draw: " + drawScore);
    if (userScore > computerScore) {
        console.log("Congratulations, You won the most!");
    }
    if (userScore < computerScore) {
        console.log("Uh oh, Computer was on a roll!");
    }
    if ((drawScore > computerScore) && (drawScore > userScore)) {
        console.log("Similar wavelenghts. Lots of draws!");
    }
    if (drawScore === computerScore) {
        console.log("Tie. You and the computer won the same amount of times!");
    }

}
  
//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));

game();