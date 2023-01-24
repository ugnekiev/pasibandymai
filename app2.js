alert("I AM DIFFERENT SCRIPT!");

let shoppingList = ["milk", "bread", "cheese"];

console.log(shoppingList);
//metodas norint pakeisti kazkuri index of array
shoppingList[2] = "Chedar cheese";
shoppingList[3] = "Ice cream";
shoppingList[shoppingList.length] = "tomatoes";
shoppingList[shoppingList.length] = "potatoes";

let lotto = [45, 34, 23, 56];

let myCollection = [45, "dog", NaN, true, null];

let topSongs = ["La la la", "Kunigunda", "Love", "Only You"];

topSongs.push("fortune Song");
topSongs.push(true);

topSongs.pop();

const nextSong = topSongs.pop();

let vaisiai = ["obuolys", "bananai"];
let darzoves = ["morkos", "bulves"];
let mesa = ["jautiena", "vistiena"];

console.log(vaisiai.concat(darzoves));
console.log(darzoves.concat(vaisiai));
console.log(darzoves.concat(vaisiai, mesa));

let food = ["shrimp", "spaghetti", "pizza", "soup", "lazania"];
//.includes grazina true arba false

console.log(food.includes("spaghetti"));
console.log(food.includes("spaghetti", 2));

console.log(food.indexOf("shrimp"));
console.log(food.indexOf("maple syrup"));

if (food.includes("pizza", "spaghetti")) {
  console.log("it is Italian food");
}

const sakinys = "kiek siame sakinyje yra raidziu? Atsakymas:";
console.log(`${sakinys} ${sakinys.length}`);

const vardas = "Anele";
console.log(`${vardas} yra ${vardas.length} raidziu ilgio vardas`);

const t = "";
console.log(`si tuscias stringas yra ${t.length} raidziu ilgio`);

const emoji = "😀";
console.log(`this emoji is from ${emoji.length} elements`);

let animals = ["avinas", "jautis", "zuikis", "katinas", "barsukas"];

let miskoGyvunai = animals.slice(0, 3);
//includes 0, but not includes 3:

let paskutiniai = animals.slice(3);
//su - parodo paskutinius nuo pasirinkto galinio, skaiciuojam nuo galo, nuo 1

let minusai = animals.slice(-4);

// greita array kopija
let kopijaAnimals = animals.slice();

let menesiai = ["sausis", "vasaris", "kovas", "balandis", "geguze", "liepa"];
console.log(menesiai.splice(5, 0, "birzelis"));
console.log(menesiai); // ['sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis', 'liepa']
const istrintiMen = menesiai.splice(6, 1);
console.log(istrintiMen); //['liepa']

let zverys = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
zverys.splice(1, 0, "octopus");
console.log(zverys);
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
zverys.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
zverys.splice(3, 2, "orca", "grizzly");
// ["shark", "octopus", "salmon", "orca", "grizzly"]

let letters = ["A", "B", "C", "D", "E"];
const atvirksciai = letters.reverse();
console.log(atvirksciai.reverse());
console.log(letters);

console.log(letters.join(" "));
console.log(letters.reverse().join("-"));
console.log(letters.reverse().join("."));
console.log(letters.join(" #_>"));

//=================
//   SORT
//=================

let vardai = ["Ugne", "Tekle", "Auguste", "Anele", "Mykole", "Ona"];
let newVardai = vardai.sort();
console.log(newVardai);

// ======================================================
// VALUE TYPES
// ===============
//Value Types - the variable stores the actual value:

let x = 100;
let y = x;

//If we change x
x = 99;
//y is unchanged
y; //100

// ===============
// REFERENCE TYPES
// ===============

// Array variables do not hold the actual array
//Instead, they store a REFERENCE to the array

let nums = [2, 4, 6, 8];
let myNums = nums; //myNums references the same array

// If we change nums
nums.push("BOO!");

//My nums is also changed:
myNums; //[2, 4, 6, 8, "BOO!"]
// ====================================================

// ======================================================
// NESTED ARRAYS
// ===============

const poros = [
  ["vista", "gaidys"],
  ["karve", "jautis"],
  ["ozka", "ozys"],
];
console.log(poros[1][1]);
console.log(poros[2]);

poros[0][1] = "gaidelis";
console.log(poros[0]);
