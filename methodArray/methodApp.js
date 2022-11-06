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
    level: "Expert Plus",
  },
  {
    videoGame: "Crash",
    company: "Sony",
    level: "Medium",
  },
  {
    videoGame: "Fifa-Football",
    company: "EASport",
    level: "Basic",
  },
  {
    videoGame: "Gears Of Wars",
    company: "Microsoft",
    level: "Medium",
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

const fullGamer = videoGames.map((gamerPlayer) => ({
  ...gamerPlayer,
  fullGammer: `${gamerPlayer.company} - ${gamerPlayer.level} - ${gamerPlayer.videoGame}`,
}));

//*? ==> Filter() */
const filterGammer = videoGames.filter(
  (personFilter) => personFilter.level === "Basic"
);

const addFilter = videoGames.filter((addPlayer) => {
  if (addPlayer.level === "Medium") {
    return addPlayer;
  }
});

const plusFilter = videoGames.filter((plus) => plus.level === "Expert");

//*! === Call ForEach() */
//console.log(`FullGames:`, fullGames);

//*! === Call Map() */
//console.log(peopleFriend);
//console.log(newGamer);
//console.log(addGamer);
//console.log(fullGamer);

//*! === Call Filter() */
console.log(filterGammer);
console.log(addFilter);
console.log(plusFilter);
