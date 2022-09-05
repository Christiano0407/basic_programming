//** === Prove POO (Programming Oriented Object) === */

//*! === Variable Mokepon === */
export let myMokepons = [];

//** === === Section CANVAS === >>> */
const idMapSection = document.getElementById(`idMapSection`);
const map = document.querySelector(`#idMap`);
const btnMoveMokepon = document.getElementById("idBtnMoveMokepon");
//const moveBtn = document.getElementById("#idMoveBtn");
//**  === === CANVAS  === === >>> */
let pencil = map.getContext("2d");

//*! === Class === */
class Mokepon {
  constructor(name, image, life, power) {
    this.name = name;
    this.image = image;
    this.life = life;
    this.power = power;
    this.attack = [];
    this.x = 20;
    this.y = 30;
    this.width = 100;
    this.height = 75;
    this.mapImage = new Image();
    this.mapImage.src = image;
  }
}

export let monsterFires = new Mokepon(
  `MonsterFire`,
  `/src/assets/img/mokepon1.png`,
  3,
  65
);

export let waterBombs = new Mokepon(
  `WaterBomb`,
  `/src/assets/img/mokepon2.png`,
  3,
  60
);
export let punchEarths = new Mokepon(
  `PunchEarth`,
  "/src/assets/img/mokepon3.png",
  3,
  70
);
//*! === Call My Mokepons => Methods === */
monsterFires.attack.push(
  { name: "fireAttack 🔥", id: "btnMokeponFire", power: 75, level: 1 },
  { name: "fireFinally 🧨", id: "btnMokeponFire", power: 50, level: 2 },
  { name: "bombFire 🎇", id: "btnMokeponFire", power: 35, level: 3 },
  { name: "volcanoBomb 🌋", id: "btnMokeponWater", power: 30, level: 4 },
  { name: "rockFire 🥌", id: "btnMokeponEarth", power: 25, level: 5 }
);

waterBombs.attack.push(
  { name: "waterBomb 💧", id: "btnMokeponWater", power: 70, level: 1 },
  { name: "splash ♒", id: "btnMokeponWater", power: 60, level: 3 },
  { name: "smashSplash 🤽‍♂️", id: "btnMokeponWater", power: 35, level: 3 },
  { name: "nightWave 👿", id: "btnMokeponFire", power: 25, level: 4 },
  { name: "airSmall 🛩", id: "btnMokeponEarth", power: 20, level: 5 }
);

punchEarths.attack.push(
  { name: "rockSmash 🦾", id: "btnMokeponEarth", power: 80, level: 1 },
  { name: "plantsAttack 🌾", id: "btnMokeponEarth", power: 40, level: 2 },
  { name: "BombAir 💣", id: "btnMokeponEarth", power: 25, level: 3 },
  { name: "redBomb 💣", id: "btnMokeponFire", power: 20, level: 4 },
  { name: "waterEarth 🚰", id: "btnMokeponWater", power: 15, level: 5 }
);
//*! === Var General => Key === */
myMokepons.push(monsterFires, waterBombs, punchEarths);

//*! === CALL */
//console.log(monsterFire);
//console.log(myMokepons);
//console.log(myMokepons[0]);
/* myMokepons.forEach((mokepon) => {
  console.log(mokepon.name);
  console.log(mokepon.attack);
  console.log(mokepon.power);
}); */
//*! === Canvas Map */
export const selectCanvasMokepon = () => {
  // === Canvas ===
  idMapSection.style.display = "flex";
  //let imageMokeponFire = new Image();
  //imageMokeponFire.src = `/src/assets/img/mokepon1.png`;
  //imageMokeponFire.src = monsterFires.image;
  //pencil.fillRect(5, 10, 50, 25);
  //pencil.drawImage(imageMokeponFire, 20, 40, 75, 50);
};

btnMoveMokepon.addEventListener("click", () => {
  moveMokeponTravel();
});

function drawMokepon() {
  pencil.clearRect(0, 0, map.width, map.height); // ===> Clear my Canvas <===
  pencil.drawImage(
    monsterFires.mapImage,
    monsterFires.x,
    monsterFires.y,
    monsterFires.width,
    monsterFires.height
  );
}
//> Call Button ===
const moveMokeponTravel = () => {
  monsterFires.x += 5;
  drawMokepon();
};
