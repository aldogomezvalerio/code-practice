"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Chose between rock, paper or scissors : ", function (answer) {
    var options = ["rock", "paper", "scissors"];
    var random = Math.ceil(Math.random() * 3) - 1;
    var computerChoice = options[random];
    if (answer === computerChoice) {
        console.log("You both chose ".concat(answer, ". It's a tie!"));
    }
    else if (answer === "rock" && computerChoice === "scissors")
        console.log("You chose ".concat(answer, " and the computer chose ").concat(computerChoice, ". You win!"));
    else if (answer === "paper" && computerChoice === "rock")
        console.log("You chose ".concat(answer, " and the computer chose ").concat(computerChoice, ". You win!"));
    else if (answer === "scissors" && computerChoice === "paper")
        console.log("You chose ".concat(answer, " and the computer chose ").concat(computerChoice, ". You win!"));
    else
        console.log("You chose ".concat(answer, " and the computer chose ").concat(computerChoice, ". You lose!"));
    rl.close();
});
