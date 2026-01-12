import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Chose between rock, paper or scissors : ", (answer) =>{
    let options: string[] = ["rock", "paper", "scissors"];

    let random:number = Math.ceil(Math.random() * 3) - 1;
    let computerChoice:string = options[random];

    if (answer === computerChoice) {
        console.log(`You both chose ${answer}. It's a tie!`);
    } else if (answer === "rock" && computerChoice === "scissors")  
        console.log(`You chose ${answer} and the computer chose ${computerChoice}. You win!`);
    else if (answer === "paper" && computerChoice === "rock")
        console.log(`You chose ${answer} and the computer chose ${computerChoice}. You win!`);
    else if (answer === "scissors" && computerChoice === "paper")
        console.log(`You chose ${answer} and the computer chose ${computerChoice}. You win!`);
    else
        console.log(`You chose ${answer} and the computer chose ${computerChoice}. You lose!`);

    rl.close();
});


