//userChoice function to get user input 0-2
//if user clicks button id="rock" then userChoice = 0
//if user clicks button id="paper" then userChoice = 1
//if user clicks button id="scissors" then userChoice = 2

let userNum;
let cpuNum;
let userElement;
let randomNumber;

main();

//function listener for user click on button id="rock" then userChoice = 0
function main() {
    // user play rock

    // console.log("user play rock button)")
    ;

}
//  function plays rockButton
function rockButton() {
    console.log("user played rock");
    computerChoice();
    userNum = 0;
    determineWinner();
}
//  function plays paperButton
function paperButton() {
    console.log("user played paper");
    computerChoice();
    userNum = 1;
    determineWinner();

}
// function plays scissorButton
function scissorButton() {
    console.log("user played scissor");
    computerChoice();
    userNum = 2;
    determineWinner();

}

//function with random number 0-2, returns rock, paper, or scissors
function computerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock',
            cpuNum = 0,
            console.log("cpu played Dwayne the rock johnson");
    } else if (randomNumber === 1) {
        return 'paper',
            cpuNum = 1,
            console.log("cpu submitted paperwork, bring yor katana");
    } else {
        return 'scissors',
            cpuNum = 2,
            console.log("cpu is throwing scissors, take cover!");
    }
}

//function determineWinner with computerChoice() to userChoice()
function determineWinner() {
    if (cpuNum === userNum) {
        return 'Tie',
            console.log("tie");
    } else if (cpuNum === 0 && userNum === 2) {
        return 'Computer wins',
            console.log("cpu wins");
    } else if (cpuNum === 0 && userNum === 1) {
        return 'User wins',
            console.log("user wins");
    } else if (cpuNum === 1 && userNum === 0) {
        return 'Computer wins',
            console.log("cpu wins");
    } else if (cpuNum === 1 && userNum === 2) {
        return 'User wins',
            console.log("user wins");
    } else if (cpuNum === 2 && userNum === 0) {
        return 'User wins',
            console.log("user wins");
    } else if (cpuNum === 2 && userNum === 1) {
        return 'Computer wins',
            console.log("cpu wins");
    }

}
