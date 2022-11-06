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
//console.log(videoGames);
let fullGames = [];

//*? ==> ForEach() */
names.forEach((name) => console.log(`Hello, I am ${name}`));

videoGames.forEach((play) => console.log(play));
videoGames.forEach((player) => {
  fullGames.push(player);
});
//*! === Call ForEach() */
console.log(`FullGames:`, fullGames);

//*? ==> MAP() */
const peopleFriend = names.map((friend) => `Hello my friend ${friend}`);

const newGamer = videoGames.map((gamer) => {
  return {
    gamerLevel: gamer.level,
  };
});

const addGamer = videoGames.map((personGamer) => {
  return {
    /* videoGame: personGamer.videoGame,
    company: personGamer.company,
    level: personGamer.level, */
    ...personGamer,
    plusGamer: `${personGamer.videoGame} - ${personGamer.company}`,
  };
});

//*! === Call Map() */
console.log(peopleFriend);
console.log(newGamer);
console.log(addGamer);
