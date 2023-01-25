// for (let i = 1; i <= 10; i++) {
//   console.log("Hello!", i);
// }

for (let i = 1; i <= 10; i += 3) {
  console.log("Hello!", i);
}

for (let num = 1; num <= 20; num++) {
  console.log(`${num}x${num}=${num * num}`);
}

// for (let k = 50; k >= 1; k -= 5) {
//   console.log(k);
// }
// // 50
// // 45
// // 40
// // 35
// // 30
// // 25
// // 20
// // 15
// // 10
// // 5

for (let k = 200; k >= 1; k -= 25) {
  console.log(k);
}

const examScores = [98, 78, 65, 99, 56, 89];

for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}
let animals = ["zuikis", "asilas", "ozka", "vista"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

for (let i = animals.length - 1; i >= 0; i--) {
  console.log(i, animals[i]);
}

const students = [
  {
    name: "John",
    age: 45,
  },
  {
    name: "Steven",
    age: 38,
  },
  {
    name: "Laura",
    age: 56,
  },
  {
    name: "Dona",
    age: 42,
  },
];
// for (let i = 0; i < students.length; i++) {
//   let student = students[i];
//   console.log(`${student.name} age is ${student.age}`);
// }
let total = 0;
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  total += student.age;
}
//VIDUTINIS STUDENTU AMZIUS
console.log(total / students.length);

//=============================================================
const vardasAtvirksciai = "anele";
let naujasVardas = "";

for (let i = vardasAtvirksciai.length - 1; i >= 0; i--) {
  naujasVardas += vardasAtvirksciai[i];
  console.log(naujasVardas);
  //   console.log(vardasAtvirksciai[i]);
}
console.log(naujasVardas);

//=============================================================
const zodis = "alijosius";
let zodisN = "";
for (let i = 0; i <= zodis.length - 1; i++) {
  zodisN += zodis[i];
  console.log(zodisN);
}
//=============================================================
//ATSPAUSDINTI NUO 3 iki 29 LYGINIUS
for (let i = 3; i <= 29; i++) {
  //   console.log(i);
  if (i % 2 === 0) {
    console.log(i);
  }
}
//=============================================================
//ATSPAUSDINTI NUO 3 iki 29 NELYGINIUS
for (let i = 3; i <= 29; i++) {
  //   console.log(i);
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//=============================================================
//Print the EVEN numbers 12 down to -14 in descending order, one number per line.
for (let i = 12; i >= -14; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
//=============================================================
//Initialize two variables to hold the string 'LaunchCode'
//and the array [1, 5, 'LC101', 'blue', 42], then construct for loops
//to accomplish the following tasks:

const kodukas = "LaunchCode";
const arejukas = [1, 5, "LC101", "blue", 42];

//Print each element of the array to a new line.

for (let i = 0; i <= kodukas.length - 1; i++) {
  console.log(kodukas[i]);
}

for (let i = 0; i <= arejukas.length - 1; i++) {
  console.log(arejukas[i]);
}
//Print each character of the string---in reverse order---to a new line.

for (let k = kodukas.length - 1; k >= 0; k--) {
  console.log(kodukas[k]);
}

for (let k = arejukas.length - 1; k >= 0; k--) {
  console.log(arejukas[k]);
}
//=============================================================
//Construct a for loop that sorts the array
//[2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays
//a.Define an empty evens array to hold the even numbers and
//an odds array for the odd numbers.

const sortArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evensArray = [];
let oddsArray = [];

for (let i = 0; i <= sortArray.length - 1; i++) {
  if (i % 2 === 0) {
    evensArray += [i];
  }
}
console.log(evensArray);

for (let i = 0; i <= sortArray.length - 1; i++) {
  if (i % 2 !== 0) {
    oddsArray += [i];
  }
}
console.log(oddsArray);
console.log(sortArray);
//=============================================================
