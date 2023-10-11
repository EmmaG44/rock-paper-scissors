function getComputerChoice() {
    const arr = ["Rock", "Paper", "Scissors"];
    return arr[(Math.floor(Math.random() * arr.length))];
}

function playRound(playerSelection, computerSelection) {
    let playerWins = true;
    const capPlayerSelection = (playerSelection.charAt(0)).toUpperCase() + (playerSelection.substring(1)).toLowerCase();
    
    if (capPlayerSelection === computerSelection) {
        return `It is a draw. Both chose ${capPlayerSelection}`;
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
        return `You Win! ${capPlayerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${capPlayerSelection}`
    }

}

const playerSelection = "pAPER";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));