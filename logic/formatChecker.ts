////This code check if an entered string matches a specific format using regExp in TypeScript.
function isFormatValid(
  str: string,
  format: "email" | "url" | "date" | "phone" | "money"
): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const phoneRegex =
    /^\+?(\d{1,3})?[-.\s]?\(?(\d{1,4})?\)?[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/;
  const moneyRegex = /^\$?(\d{1,3},?)*\.?\d{0,2}$/;

  switch (format) {
    case "email":
      return emailRegex.test(str);
    case "url":
      return urlRegex.test(str);
    case "date":
      return dateRegex.test(str);
    case "phone":
      return phoneRegex.test(str);
    case "money":
      return moneyRegex.test(str);
    default:
      return false;
  }
}

isFormatValid("test@example.com", "email")
  ? console.log("Valid")
  : console.log("Invalid");
