//** === === POO === Basic === === */
//*? > new ==> Instance New */
let playerSoccer = [];
let coachSoccer = [];

//** === FUNCTION < */
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

//** === CLASS > Sugar Syntax < === */
class Player {
  constructor(name, firstName, country, age, title, team) {
    (this.name = name),
      (this.firstName = firstName),
      (this.country = country),
      (this.age = age),
      (this.title = title),
      (this.team = team);
  }
  // === Method ===
  addGoals() {
    console.log("Goal!!");
  }
}

//** ==> Extend */
class Coach extends Player {
  constructor(experience, name, country) {
    super(name, country);
    this.experience = experience;
  }
}

//*! === new Player */
const christiano = new Player(
  "Cristiano",
  "Ronaldo",
  "Portugal",
  36,
  "Ball Oro",
  "Manchester United"
);
const messi = new Player(
  "Messi",
  "Lionel",
  "Argentina",
  35,
  "Ball Oro",
  "Paris Saint German"
);

const guardiola = new Coach(
  "Barcelona, Manchester City y Bayer Munich",
  "Spain",
  "Guardiola"
);

//*! === Call Player Soccer === */
playerSoccer.push(christiano, messi);
coachSoccer.push(guardiola);

//*! === Call === */
console.log(Object.keys(user));
const chris = new Person({ name: "Chris", country: "Mexico" });
console.log(chris);
chris.showName();
console.log(chris.add());

//console.log(christiano);
//christiano.addGoals();
console.log(playerSoccer);
console.log(coachSoccer);
