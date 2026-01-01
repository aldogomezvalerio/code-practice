const passRegExpr =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let pass = "";

patternArray = [
  () => Math.floor(Math.random() * (122 - 97 + 1)) + 97,
  () => Math.floor(Math.random() * (90 - 65 + 1)) + 65,
  () => Math.floor(Math.random() * (57 - 48 + 1)) + 48,
  () => Math.floor(Math.random() * (64 - 33 + 1)) + 33,
];

let cont = 0;
for (let i = 0; i < 15; i++) {
  pass += String.fromCharCode(patternArray[Math.floor(cont)]());
  cont = cont < 3 ? cont + 1 : 0;
}

console.log(pass, passRegExpr.test(pass));

/*while (!passRegExpr.test(pass)) {
  for (let i = 0; i < 4; i++) {
    pass += String.fromCharCode(patternArray[i]());
  }
  pass += String.fromCharCode(patternArray[Math.floor(Math.random() * 4)]());
}
console.log(pass);*/
