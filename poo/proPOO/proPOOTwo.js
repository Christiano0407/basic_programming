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
  "Mexico",
  "Guadalajara Jalisco",
  "América",
  1,
  1,
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

Object.defineProperty(playerOchoa, "PlayerMexican", {
  value: "Player Soccer Pro Mexican",
  enumerable: true,
  writable: false,
});
//console.log(Object.getOwnPropertyDescriptors(playerOchoa));
