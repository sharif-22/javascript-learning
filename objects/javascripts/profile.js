// user profile object
const profile = {
  // objects property
  name: "Khaja Sharif",
  bornIn: 2002,
  isDeveloper: true,
  languages: ["CSS", "PHP", "Javascript", "React", "Node"],

  // object method to get age
  dob() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.bornIn;
    // console.log(this.languages.includes("CSS"));

    return age;
  },
};

// acessing profile object property
// console.log(profile.name);

// acessing profile object methods
// console.log(profile.dob());

export default profile;
