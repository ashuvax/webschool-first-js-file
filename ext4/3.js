//השוואה בין שתי מספרים ולהזיר מה יותר גדול
const num1 = parseInt(prompt("Please enter the number1:"));
const num2 = parseInt(prompt("Please enter the number2:"));
if (num1 > num2) {
  alert(num1);
} else {
  alert(num2);
}
//אם מתחת מ18 אלכוהול
const age = parseInt(prompt("Please enter your age:"));
if (age < 18) {
  alert("מצטערים אסור לך לשתות אלכוהול");
} else {
  alert("הנך מאושר לשתות אלכוהול");
}
//אם הציון פחות או שווה 60 נכשל ?
const score = parseInt(prompt("Please enter your score:"));
if (score <= 60) {
  alert("נכשל");
} else if (score <= 70) {
  alert("d");
} else if (score <= 80) {
  alert("c");
} else if (score <= 90) {
  alert("b");
} else if (score <= 100) {
  alert("a");
} else {
  alert("לא חוקי");
}
//  שפה עברית אנגלית צרפתית
const language = parseInt(prompt("Please enter your language:"));
if (language === "עברית") {
  alert("שלום עולם");
} else if (language === "אנגלית") {
  alert("helo world");
} else if (language === "צרפתית") {
  alert("bongffy");
} else {
  alert("לא חוקי");
}

//בודק זוגי או אי זוגי
while (num < 999999999) {
  const num = parseInt(prompt("Please enter the number:"));

  if (parseInt(num / 2) * 2 < num) {
    alert("אי זוגי");
  } else {
    alert("זוגי");
  }
}
