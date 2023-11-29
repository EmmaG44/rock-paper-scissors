function getComputerChoice() {
    const arr = ["Rock", "Paper", "Scissors"];
    return arr[(Math.floor(Math.random() * arr.length))];
}

function playRound(playerSelection, computerSelection) {
    let playerWins = true;
    const capPlayerSelection = (playerSelection.charAt(0)).toUpperCase() + (playerSelection.substring(1)).toLowerCase();
    
    if (capPlayerSelection === computerSelection) {
        //return `It is a draw. Both chose ${capPlayerSelection}`;
        return "draw";
    }

    else {
    
        switch(capPlayerSelection) {
            case "Rock":
                if (computerSelection === "Paper") {
                    playerWins = false;
                }
                break
            
            case "Paper":
                if (computerSelection === "Scissors") {
                    playerWins = false;
                }
                break
               
            case "Scissors":
                if (computerSelection === "Rock") {
                    playerWins = false;
                }
                break
                
            default:
                return "Not applicable";
        }
    }

    if (playerWins) {
        //return `You Win! ${capPlayerSelection} beats ${computerSelection}`;
        return "player";
    }
    else {
        //return `You Lose! ${computerSelection} beats ${capPlayerSelection}`
        return "computer";
    }

    
}

/*button.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})*/


function game() {
    let playerWinCount = 0;
    let compWinCount = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter Rock, Paper or Scissors");
        
        const computerSelection = getComputerChoice();

        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "player") {
            playerWinCount += 1;
        }
        else if (roundResult === "computer") {
            compWinCount += 1;
        }
    }

    if (playerWinCount > compWinCount) {
        return `Player: ${playerWinCount} Computer: ${compWinCount}. Player Wins`;
    }
    else if (compWinCount > playerWinCount) {
        return `Player: ${playerWinCount} Computer: ${compWinCount}. Computer Wins`;
    }
    else {
        return `It is a draw. Both got ${playerWinCount}`
    }
}


console.log(game());