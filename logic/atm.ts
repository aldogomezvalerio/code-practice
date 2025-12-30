import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter card ID: ", (cardId) => {
    rl.question("Enter amount to withdraw: ", (amount) => {
    console.log(withdraw(parseInt(cardId), parseInt(amount)));
    rl.close();
    });
});

type Card = {
  id: number;
  type: string;
  balance: number;
};

let cards: Card[] = [
  { id: 1, type: "debit", balance: 500 },
  { id: 2, type: "credit", balance: 1000 },
  { id: 3, type: "debit", balance: 300 },
];

function withdraw(cardId: number, amount: number): string {
  const card = cards.find((c) => c.id === cardId);
  if (!card) {
    return "Card not found";
  }
  if (card.balance < amount) {
    return "Insufficient funds";
  }
  card.balance -= amount;
  return "Withdrawal successful. Your new balance is " + card.balance;
}
