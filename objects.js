// totalSteps  -> 308727,
// totalMiles  -> 211.7,
// avgCalorieBurn -> 5755,
// workoutsThisWeek -> '5 of 7',
// avgGoodSleep   -> '2:13's

const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
  45: "fourty five",
};

const number = {
  100: "one hundred",
  200: "two hundred",
  300: "three hundred",
  "76 tromboons": "great song!",
};

const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};

let mysteryColor = "yellow";

console.log(palette[mysteryColor]);
// jei ieskociau palette.mysteryColor - tai tada ieskotu tokio property pallete, o ten tokio nera..

//=============================
//ADDING or UPDATING NEW VALUES
//=============================

const pirkiniuKrepselis = {};

pirkiniuKrepselis["obuoliai"] = 6;
pirkiniuKrepselis.kriauses = 3;
pirkiniuKrepselis.duona = 2;
pirkiniuKrepselis.pienas = "1l";

pirkiniuKrepselis["kriauses"] += 2;

//=============================
//ARRAYS + OBJECTS
//=============================

const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};
//uzduotis sudeti examinus ir pdalinti is 2
const avg = (student.exams.midterm + student.exams.final) / 2;

const shoppingCart = [
  {
    product: "Jenga Classic",
    price: 6.88,
    quantity: 1,
  },
  {
    product: "Echo Dot",
    price: 29.99,
    quantity: 3,
  },
  {
    product: "Fire Stick",
    price: 39.99,
    quantity: 2,
  },
];

const game = {
  player1: {
    userName: "kuktis",
    gameSign: "X",
  },
  player2: {
    userName: "kuosa",
    gameSign: "O",
  },
  gameBoard: [
    ["X", null, "O"],
    [null, "X", "O"],
    ["X", "X", "O"],
  ],
};

const user = {
  userName: "blabala1",
  email: "blabla@email.com",
  notifications: [],
};

if (!user.notifications.length) {
  console.log("NO NEW NOTIFICATIONS");
}
