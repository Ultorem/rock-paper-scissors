
let userNum;
let cpuNum;
let randomNumber;
let round = 0;
let userWinCount = 0;
let cpuWinCount = 0;

function rounds () {
    round++;
    console.log(round);
    document.getElementById("roundCounter").innerHTML = round;
}

//logs cpu wins and displays it in index.html
function cpuWins () {
    cpuWinCount++;
    console.log(cpuWinCount);
    document.getElementById("cpuStats").innerHTML = cpuWinCount;

}


//logs player wins and displays it in index.html
function playerWins () {
    userWinCount++;
    console.log(userWinCount);
    document.getElementById("playerStats").innerHTML = userWinCount;

}



//  function plays rockButton
function rockButton () {
    console.log("user played rock");
    computerChoice();
    userNum = 0;
    determineWinner();
    rounds();
}

//  function plays paperButton
function paperButton () {
    console.log("user played paper");
    computerChoice();
    userNum = 1;
    determineWinner();
    rounds();

}

// function plays scissorButton
function scissorButton () {
    console.log("user played scissor");
    computerChoice();
    userNum = 2;
    determineWinner();
    rounds();
}

// function with random number 0-2, returns rock, paper, or scissors
function computerChoice () {

    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock",
        cpuNum = 0,
        console.log("cpu played Dwayne the rock johnson");
    } else if (randomNumber === 1) {
        return "paper",
        cpuNum = 1,
        console.log("cpu submitted paperwork, bring yor katana");
    } else {
        return "scissors",
        cpuNum = 2,
        console.log("cpu is throwing scissors, take cover!");
    }
    
}

// function determineWinner with computerChoice() to userChoice()
function determineWinner () {
    if (cpuNum === userNum) {
        return "Tie",
        console.log("tie");
    } else if (cpuNum === 0 && userNum === 2) {
        return "Computer wins",
        cpuWins (),
        console.log("cpu wins");
    } else if (cpuNum === 0 && userNum === 1) {
        return "User wins",
        playerWins (),
        console.log("user wins");
    } else if (cpuNum === 1 && userNum === 0) {
        return "Computer wins",
        cpuWins (),
        console.log("cpu wins");
    } else if (cpuNum === 1 && userNum === 2) {
        return "User wins",
        playerWins (),
        console.log("user wins");
    } else if (cpuNum === 2 && userNum === 0) {
        return "User wins",
        playerWins (),
        console.log("user wins");
    } else if (cpuNum === 2 && userNum === 1) {
        return "Computer wins",
        cpuWins (),
        console.log("cpu wins");
    }

}
