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

const peopleGammer = [
  {
    name: "Natasha",
    consoleGaming: "Sony-PlayStation",
    age: 25,
    country: "British",
  },
  {
    name: "Elizabeth",
    consoleGaming: "Microsoft-XBOX",
    age: 20,
    country: "United-State",
  },
  {
    name: "Chris",
    consoleGaming: "Nintendo-Switch",
    age: 32,
    country: "Australia",
  },
  {
    name: "Pedro",
    consoleGaming: "Microsoft-XBOX",
    age: 19,
    country: "Mexico",
  },
  {
    name: "Juliette",
    consoleGaming: "Sony-PlayStation",
    age: 22,
    country: "United-State",
  },
  {
    name: "Pablo",
    consoleGaming: "Nintendo-Switch",
    age: 24,
    country: "Mexico",
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

//*? ==> Reduce() === > (Acumulador, Elemento) < ===  */
const reduceAge = peopleGammer.reduce((total, ages) => {
  return total + ages.age;
}, 0);
//*? ==> acumulador ==> 0 */

const consoles = peopleGammer.reduce((allConsoles, gammerPerson) => {
  return [...allConsoles, gammerPerson.consoleGaming];
}, []);

//*? ==> Sort() === > Order < === */
/* const ageGamer = peopleGammer.sort((first, second) => {
  if (first.age < second.age) {
    return 1;
  }
  return -1;
}); */

const compareAge = peopleGammer.sort((a, b) => (a.age > b.age ? 1 : -1));

//*? ==> Recibe 2 Obj and Compare (ObjBefore = first and ObjAfter = Second) <== */
//*? ==> Validar:  Operador Ternario (?, :) casi igual a if() <== */

//*? ==> Find() === Search */
const searchCountry = peopleGammer.find((nation) => {
  //nation.country === "Mexico" ? 1 : console.log("Sorry")
  if (nation.country === "Mexico") {
    return 1;
  }
});

//*? ==> Some() === True or False === */
const trueGamer = peopleGammer.some((student) => {
  if (student.age < 22) {
    return true;
  }
});

const gamerTrue = peopleGammer.some((studentTrue) =>
  studentTrue.name === "Pablo" ? true : false
);

//*! === Call ForEach() */
//console.log(`FullGames:`, fullGames);

//*! === Call Map() */
//console.log(peopleFriend);
//console.log(newGamer);
//console.log(addGamer);
//console.log(fullGamer);

//*! === Call Filter() */
//console.log(filterGammer);
//console.log(addFilter);
//console.log(plusFilter);

//*! === Call Reduce() */
//console.log("Reduce Total Age: ", reduceAge);
//console.log("All Consoles Gammers: ", consoles);

//*! ===  Call Sort() */
//console.log(ageGamer);
//console.log(compareAge);

//*! === Call  Find() */
//console.log(searchCountry);

//*! === Call Some() */
console.log(trueGamer);
console.log(gamerTrue);
