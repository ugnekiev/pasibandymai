console.log(9 + 4);
console.log(8 * 9);

"hi".toUpperCase();
console.log("hi".toUpperCase());

console.log("hello!", 5, 3 + 6);

if (3 === 3) {
  console.log("it's True");
}

if (3 < 4) {
  console.log("true");
}
// 1st example
let rating = 3;

if (rating === 3) {
  console.log("You're superstar");
}

//2nd example
let rating2 = 2;

if (rating2 < 3) {
  console.log("You're not a superstar");
}

//3 example
let num = 40;

if (num % 2 !== 0) {
  console.log("ODD number");
} else {
  console.log("EQUAL number");
}

// if and else if
let rating3 = 2;
if (rating3 === 3) {
  console.log("Tinka");
} else if (rating3 === 2) {
  console.log("Tinka taip pat");
} else if (rating3 === 1) {
  console.log("Tinka taip pat tinka");
}

//else
let rating4 = 3;
if (rating4 === 3) {
  console.log("Tinka");
} else if (rating4 === 2) {
  console.log("Tinka taip pat");
} else if (rating4 === 1) {
  console.log("Tinka taip pat tinka");
} else console.log("erorr");

//if and else (yes or no)

let highScore = 1700;
let userScore = 1750;

if (userScore >= highScore) {
  console.log(`Gongrats, You have a new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(`Good game. Your score didn't beat of score ${highScore}`);
}
console.log(highScore);

//Nesting Conditionals

let password = "kitty";
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid password");
  } else {
    console.log("Pasword is long enough, but can't contain spaces");
  }
} else {
  console.log("Password must be longer");
}

// truthy or falsy

let mystery = "";

if (mystery) {
  console.log("truthy");
} else {
  console.log("falsy");
}

//example

let loggedInUser = "thomas123";

//let loggedInUser ; bus undefined - tada sakys "you should log in"
//let loggedUser = null;

if (loggedInUser) {
  console.log("You're logged in!"); //when truthy value
} else {
  console.log("You should log in!"); //when falsy value
}

//OPERATOR &&
//jei nors viena puse false -  tada visas statment false

let slaptazodis = "chickenGal";

if (slaptazodis.length >= 8 && slaptazodis.indexOf(" ") === -1) {
  console.log("VALID PASSWORD");
} else {
  console.log("INVALID PASSWORD");
}

let number = 4;
if (number >= 1 && number <= 10) {
  console.log("tai skaicius tarp 1 ir 10");
} else {
  console.log("reikia kito skaiciaus");
}

//OPERATOR ||

let age = 55;

if (age <= 6 || age >= 65) {
  console.log("you can go for free!");
} else {
  console.log("you must payyy!");
}

let color = "purple";

if (color === "purple" || color === "violet" || color === "orchid") {
  console.log("it's a great choice!");
} else {
  console.log("error");
}

//SWITCH

let day = 13;

switch (day) {
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WENSDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  case 7:
    console.log("SUNDAY");
    break;

  default:
    console.log("INVALID DAY");
    break;
}

let skaicius = 9;

num === 7 ? console.log("Lucky") : console.log("Bad");

let stat = "offline";

let colo = stat === "offline" ? "red" : "green";
