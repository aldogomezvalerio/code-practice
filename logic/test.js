const passRegExpr =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let pass = "";
const specialChars = ["@", "$", "!", "%", "*", "?", "&"];
let cont = 0;

patternArray = [
  () => Math.floor(Math.random() * (122 - 97 + 1)) + 97,
  () => Math.floor(Math.random() * (90 - 65 + 1)) + 65,
  () => Math.floor(Math.random() * (57 - 48 + 1)) + 48,
  () => specialChars[Math.floor(Math.random() * 6)],
];


for (let i = 0; i < 15; i++) {
  pass += String.fromCharCode(patternArray[Math.floor(cont)]());
  cont = cont < 3 ? cont + 1 : 0;
}

pass += specialChars[Math.floor(Math.random() * 6)];

console.log(pass);


