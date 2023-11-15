import profile from "./profile.js";
import guessProfession from "./methodMergeing.js";
import { proflieCloned, spreadTry1, spreadTry2 } from "./clone.js";
// -----------------------------------------------------------------------------------------------------------

// merge

// Object.assign(profile, guessProfession);

// -----------------------------------------------------------------------------------------------------------

// delete obj key

// console.log("profile : ", profile.name); //khaja sharif

// delete profile.name;

// console.log("profile : ", profile.name); // undefine

// -----------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

// filling the content to < HTML />

// catching DOM elements
const profileNameEL = document.querySelector(".profile-name");
const profileAgeEL = document.querySelector(".profile-age");
const profileExpertinEL = document.querySelector(".profile-expertin");

// adding dynamic textContent
profileNameEL.textContent = profile.name;
profileAgeEL.textContent = profile.dob();
profileExpertinEL.textContent = profile.profession();
