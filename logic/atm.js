"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter card ID: ", function (cardId) {
    rl.question("Enter amount to withdraw: ", function (amount) {
        console.log(withdraw(parseInt(cardId), parseInt(amount)));
        rl.close();
    });
});
var cards = [
    { id: 1, type: "debit", balance: 500 },
    { id: 2, type: "credit", balance: 1000 },
    { id: 3, type: "debit", balance: 300 },
];
function withdraw(cardId, amount) {
    var card = cards.find(function (c) { return c.id === cardId; });
    if (!card) {
        return "Card not found";
    }
    if (card.balance < amount) {
        return "Insufficient funds";
    }
    card.balance -= amount;
    return "Withdrawal successful. Your new balance is " + card.balance;
}
