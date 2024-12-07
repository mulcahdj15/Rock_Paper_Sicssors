console.log("welcome to my game.. do you want to play?")

let humanScore = 0;//declare players score
let computerScore = 0;//declare computers score

//function for getComputer
function getComputer(){
    const cpuAns = Math.floor((Math.random() * 3) + 1);
    console.log(cpuAns);
    
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

    return humanAnsLower;
}

//Function for comparing score
function whoWon(getComputer,getHuman) {
    let cpu = getComputer;
    let human = getHuman;

    if ( human === "paper" && cpu === "rock" || human === "rock" && cpu === "scissors" || getHuman === "scissors" && getComputer === "paper"){
        console.log("The Human is superiour ")
        return humanScore++;
    } else if ( getHuman === "paper" && getComputer === "rock" || getHuman === "rock" && getComputer === "scissors" || getHuman === "scissors" && getComputer === "paper"){
        console.log("The Human is superiour ")
        return humanScore++;
    }
            
    }

    switch (human === "paper")

}

//function for playing 1 round


//function to increment winners score


//function for message to winner.