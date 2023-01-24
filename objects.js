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
