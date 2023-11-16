// ---------------------{Object}-------------------------
let fruitsObject = {
  tray: ["Apple", "Pine apple", "Grapes", "Orange"],
};
console.log(fruitsObject);
isArray(fruitsObject);

// Method 1

// checking the types of fruitsObject
let isArray = Array.isArray(fruitsObject);
console.log(`Checking the fruits array isArray ? ${isArray}`);

// -------------------------[ Array ]------------------
let fruitsArray = ["Apple", "Pine apple", "Grapes", "Orange"];
console.log(fruitsArray);
isArray(fruitsArray);

// Method 1

// checking the types of fruitsArray
let isArray = Array.isArray(fruitsArray);
console.log(`Checking the fruits array isArray ? ${isArray}`);

// method 2 - custum function
function isArray(dataType) {
  dataType.length >= 0
    ? console.log("given type is Array")
    : console.log("given type is not Array");
}
