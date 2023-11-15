import profile from "./profile.js";

// object methods mergeing

// created a {} with ()
const guessProfession = {
  // object method to find they skilledin
  profession() {
    if (
      this.languages.includes("PHP") &&
      this.languages.includes("Javascript") &&
      this.languages.includes("Node") &&
      this.languages.includes("CSS") &&
      this.languages.includes("React")
    ) {
      return this.name + " " + "is" + " " + "Expert in Fullstack Development";
    } else if (
      this.languages.includes("CSS") &&
      this.languages.includes("Javascript") &&
      this.languages.includes("React")
    ) {
      return this.name + " " + "is" + " " + "Expert in Frontend Development";
    } else {
      return this.name + " " + "is" + " " + "Expert in Backend Development";
    }
  },
};

// mergeing two {}
// target means -> main {} + source means secondary {object} [array] "string" expect 132468 numbers
// here profile{} is main + guessprofession{} secondary

Object.assign(profile, guessProfession);
// let check the profession is added or not by log
// console.log(profile);

// while assigning "string" it took the largest string lenght and placing indidual alphabet or string to an array
// if we assign another string it over write the previous arr
// { object } + "string"
Object.assign(profile, "HTML");
Object.assign(profile, "JS");

// { object } + [ array ]
const greetings = ["Good morning", "Good night", "Good evening"];

Object.assign(profile, greetings);

// {object} + {object}
Object.assign(profile, { greet: "HI" });

console.log("methodMergeing file :", profile.profession());

export default guessProfession;
