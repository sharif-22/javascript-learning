import profile from "./profile.js";
import guessProfession from "./methodMergeing.js";

// object cloning in older way

// it slightly same as merge with empty object + scource obj and assigning this with variable for acessing the cloned one
const proflieCloned = Object.assign({}, profile);

// new way of cloning a {} is using ...spread operator
const spreadTry1 = { profile, ...guessProfession };
const spreadTry2 = { ...profile, ...guessProfession };

// console.log("log from cloning");
// console.log("profile : ", profile);
// console.log("profile clone : ", proflieCloned);

// spread operator output
// console.log("spread operator 1 ", spreadTry1);
// console.log("spread operator 2 ", spreadTry2);

export { proflieCloned, spreadTry1, spreadTry2 };
