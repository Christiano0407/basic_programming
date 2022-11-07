//*TODO === ===  === > Execute POO PRO < === === === */

class soccerPlayer {
  constructor(name, firstName, country, town, team, number, champion, brand) {
    (this.name = name),
      (this.firstName = firstName),
      (this.country = country),
      (this.town = town),
      (this.team = team),
      (this.number = number),
      (this.champion = champion),
      (this.brand = brand);
  }
  addGoal() {
    console.log("goal");
  }
  moreChampionsLeague() {
    console.log("Champions League");
  }
}
//** === > New Player Soccer < === */
const playerOchoa = new soccerPlayer(
  "Ochoa",
  "Guillermo",
  "México",
  "Guadalajara Jalisco",
  "América",
  1,
  1,
  "Nike"
);

const playerChicharito = new soccerPlayer(
  "Javier",
  "Hernández",
  "México",
  "Guadalajara Jalisco",
  "LaGalaxy",
  14,
  6,
  "Nike"
);

//** ==> Call <=== */
console.log(playerOchoa);
playerOchoa.addGoal();
console.log(Object.keys(playerOchoa));
console.log(Object.getOwnPropertyNames(playerOchoa));
console.log(Object.entries(playerOchoa));
console.log(Object.entries(playerOchoa)[0]);
console.log(Object.entries(playerOchoa)[4]);
console.log(Object.getOwnPropertyDescriptors(playerOchoa));
//console.log(Object.getOwnPropertyDescriptors(playerChicharito));

//** >>> Test DefineProperty <<< */
Object.defineProperty(playerOchoa, "PlayerMexican", {
  value: "Player Soccer Pro Mexican",
  enumerable: true,
  writable: true,
  configurable: true,
});
//console.log(Object.getOwnPropertyDescriptors(playerOchoa));

Object.defineProperty(playerChicharito, "MLSTournament", {
  value: "SoccerPlayer Tournament MLS",
  enumerable: false,
  writable: false,
  configurable: false,
});
//console.log(Object.getOwnPropertyDescriptors(playerChicharito));
