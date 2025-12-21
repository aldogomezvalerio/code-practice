//This program calculates if you have more than 18 years old
import * as readline from "readline";
let age: number = 0;
let today: string = "";
let birthDay: string = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Irght format validating function
function isValidDate(input: string): boolean {
  const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  if (!regex.test(input)) return false;

  const date = new Date(input);
  return !isNaN(date.getTime()) && date.toISOString().startsWith(input);
}

//Get current date function
function getCurrentDate(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");

  const today = `${yyyy}-${mm}-${dd}`;
  return today;
}

//Get difference years between two dates
function getYearDifference(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();

  const endMonthDay = end.getMonth() * 100 + end.getDate();
  const startMonthDay = start.getMonth() * 100 + start.getDate();

  if (endMonthDay < startMonthDay) {
    years--;
  }

  return Number(years);
}

rl.question("Prease enter your birthday in YYYY-MM-DD format: ", (date) => {
  birthDay = date;
  if (!isValidDate(birthDay)) {
    console.log(`${birthDay} is not a valid date.`);
  } else {
    age = getYearDifference(date, getCurrentDate());
    const msg: string =
      age > 17
        ? `You are ${age} years old and you are an adult`
        : `You are ${age} years old and you are not an adult`;
    console.log(msg);
  }
  //console.log(`Your birthday is ${birthDay}.`);
  rl.close();
});
