//** === POO */
//*? > new ==> Instance New */

const user = {
  name: "Chris",
  country: "Mexico City",
  showSport: () => {
    console.log("Basketball");
  },
};

function Person({ name, country }) {
  (this.name = name),
    (this.country = country),
    (this.showName = () => {
      console.log(`Hello, ${name} and Travel from ${country}`);
    });
}

Person.prototype.add = function () {
  return `I am the best and right now my name ${this.name}`;
};

//** ===  */
class Player {
  constructor(name, firstName, country, age, title, teams) {
    (this.name = name),
      (this.firstName = firstName),
      (this.country = country),
      (this.age = age),
      (this.title = title);
    this.teams = teams;
  }
  // === Method ===
  addGoals() {
    console.log("Goal!!");
  }
}

//*! === Call === */
console.log(Object.keys(user));
const chris = new Person({ name: "Chris", country: "Mexico" });
console.log(chris);
chris.showName();
console.log(chris.add());
//*! === Call Player */
const christiano = new Player(
  "Cristiano",
  "Ronaldo",
  "Portugal",
  36,
  "Ball Oro",
  "Manchester United"
);
console.log(christiano);
christiano.addGoals();
