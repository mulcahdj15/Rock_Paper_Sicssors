let humanScore = 0;//declare players score
let computerScore = 0;//declare computers score
let round = 0; //the current round;

//function for getComputer
function getComputer(){
    const cpuAns = Math.floor((Math.random() * 3) + 1);
    
    if (cpuAns === 1){
        return "rock"
    } else if (cpuAns === 2){
        return "paper"
    } else {
        return "scissors"
    }
}

//function for getHuman
function getHuman(){
    const humanAns = prompt("make your choice: ", "Rock, Paper, or Scissors");

    const humanAnsLower = humanAns.toLowerCase();

    if( humanAnsLower === "rock" || humanAnsLower === "paper" || humanAnsLower === "scissors"){
        return humanAnsLower;
    } else{
        console.log("invalid response try again, maybe you have a spelling mistake");
        return false;
    }

    
}

//Function for comparing score
function whoWon(getComputer,getHuman) {
    let cpu = getComputer;
    console.log(`Computer choice was ${cpu} `)
    let human = getHuman;
    console.log(`Humans choice was ${human}`)

    if ( human === "paper" && cpu === "rock" || human === "rock" && cpu === "scissors" || getHuman === "scissors" && getComputer === "paper"){
        console.log("The Human is superiour ")
        return humanScore++;
    } else if ( human === "rock" && cpu === "paper" || human === "scissors" && cpu === "rock" || getHuman === "paper" && getComputer === "scissors"){
        console.log("The AI is taking over ")
        return computerScore++;
    } else if(human === false){
        console.log("learn to type dumb dumb, minus 1 point")
        return humanScore--;

    }else{
        return console.log("it is a draw everyone is a loser")
    }
            
}

//function for playing 1 round
function playRound(){
    let computerChoice = getComputer();
    let humanChoice = getHuman();
    
    return whoWon(computerChoice,humanChoice);
}

//function for playing a game
function playGame(){
    console.log("Do you want to play a game?");

     for (let i = 0; i < 5; i++){
        playRound();
        console.log(`Human: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
    }
    if (humanScore > computerScore){
        console.log("The Humans have defeated the Ai, Until next time");
    } else if (humanScore < computerScore){
        console.log("The Computers have risen up")
    } else{
        console.log("the rare case of a draw")
    }
}

playGame();




