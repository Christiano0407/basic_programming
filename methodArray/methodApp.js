//** === === ==> Arrays Methods Javascript <== === === ==> Mutable & InMutable <== === === */
const names = [
  "Mau",
  "Pamme",
  "Alma",
  "Alexa",
  "Adrián",
  "Elizabeth",
  "Natasha",
  "Natalia",
];

const videoGames = [
  {
    videoGame: "Zelda",
    company: "Nintendo",
    level: "Expert",
  },
  {
    videoGame: "Mario",
    company: "Nintendo",
    level: "Expert",
  },
  {
    videoGame: "Crash",
    company: "Sony",
    level: "Expert",
  },
  {
    videoGame: "Fifa Football",
    company: "EASport",
    level: "Expert",
  },
  {
    videoGame: "Gears Of Wars",
    company: "Microsoft",
    level: "Expert",
  },
];

let fullGames = [];
//console.log(videoGames);
//*? ==> ForEach() */
names.forEach((name) => console.log(`Hello, I am ${name}`));

videoGames.forEach((play) => console.log(play));
videoGames.forEach((player) => {
  fullGames.push(player);
});
console.log(`FullGames:`, fullGames);

//*? ==> MAP() */
names.map((friend) => console.log(`Friend: ${friend}`));
//console.log(names);
