//** === Prove POO (Programming Oriented Object) === */
//** === Import  */
import { nameMokeponPlayer } from "./mokepon01.js";
import { enemySelectAdd } from "./mokeponElements.js";
//*! === Variable Mokepon === */
export let myMokepons = [];
//** === === Section CANVAS === >>> */
const idMapSection = document.getElementById(`idMapSection`);
const map = document.querySelector(`#idMap`);
const btnMoveMokepon = document.getElementById("idBtnMoveMokepon");
const btnMoveMokeponLeft = document.getElementById("idBtnMoveMokeponLeft");
const btnMoveMokeponTop = document.getElementById("idBtnMoveMokeponTop");
const btnMoveMokeponBottom = document.getElementById("idBtnMoveMokeponBottom");
//const moveBtn = document.getElementById("#idMoveBtn");
const idDivCanvas = document.querySelector("#idDivCanvas");
//** === General Variables ===  */
let interval;
let mokeponPlayerCanvas;
let mokeponEnemyCanvas;
//console.log(mokeponPlayerCanvas);
//**  === === CANVAS  === === >>> */
let pencil = map.getContext("2d");
let arenaBackground = new Image();
arenaBackground.src = "/src/assets/img/pokemonArena02.jpg";
//arenaBackground.style.background = "object-fit";
//arenaBackground.imageSmoothingQuality = "low";

//*! === Class === */
class Mokepon {
  constructor(name, image, life, power, imageCanvas, x = 10, y = 10) {
    this.name = name;
    this.image = image;
    this.life = life;
    this.power = power;
    this.attack = [];
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 50;
    this.mapImage = new Image();
    this.mapImage.src = imageCanvas;
    this.fastX = 0;
    this.fastY = 0;
  }
  // = Methods =
  drawMokepon() {
    pencil.drawImage(this.mapImage, this.x, this.y, this.width, this.height);
  }
}

export let monsterFires = new Mokepon(
  `MonsterFire`,
  `/src/assets/img/mokepon1.png`,
  3,
  65,
  `/src/assets/img/mokepon1.png`
);

export let waterBombs = new Mokepon(
  `WaterBomb`,
  `/src/assets/img/mokepon2.png`,
  3,
  60,
  `/src/assets/img/mokepon2.png`
);
export let punchEarths = new Mokepon(
  `PunchEarth`,
  "/src/assets/img/mokepon3.png",
  3,
  70,
  `/src/assets/img/mokepon3.png`
);
//*? === Enemy */
export let monsterFiresEnemy = new Mokepon(
  `MonsterFire`,
  `/src/assets/img/mokeponCha.png`,
  5,
  95,
  `/src/assets/img/mokeponCha.png`,
  550,
  250
);

export let waterBombsEnemy = new Mokepon(
  `WaterBomb`,
  `/src/assets/img/mokepon4.png`,
  2,
  70,
  `/src/assets/img/mokepon4.png`,
  400,
  160
);
export let punchEarthsEnemy = new Mokepon(
  `PunchEarth`,
  "/src/assets/img/mokepon3.png",
  5,
  80,
  `/src/assets/img/mokepon3.png`,
  600,
  120
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
//*! === Draw Mokepon POO ===  */
function drawMokepon() {
  mokeponPlayerCanvas.x += mokeponPlayerCanvas.fastX;
  mokeponPlayerCanvas.y += mokeponPlayerCanvas.fastY;
  pencil.clearRect(0, 0, map.width, map.height); // ===> Clear my Canvas <===
  pencil.drawImage(arenaBackground, 0, 0, map.width, map.height);
  mokeponPlayerCanvas.drawMokepon();
  monsterFiresEnemy.drawMokepon();
  waterBombsEnemy.drawMokepon();
  punchEarthsEnemy.drawMokepon();
  //collisionMokepon();
  if (mokeponPlayerCanvas.fastX !== 0 || mokeponPlayerCanvas.fastY !== 0) {
    collisionAllMokepon(monsterFiresEnemy);
    collisionAllMokepon(waterBombsEnemy);
    collisionAllMokepon(punchEarthsEnemy);
  }
  idDivCanvas.style.display = "none"; // === Change Btn Mouseover ===
}
//*! === Canvas Map */
export const selectCanvasMokepon = () => {
  // === Canvas ===
  idMapSection.style.display = "flex";
  //let imageMokeponFire = new Image();
  //imageMokeponFire.src = `/src/assets/img/mokepon1.png`;
  //imageMokeponFire.src = monsterFires.image;
  //pencil.fillRect(5, 10, 50, 25);
  //pencil.drawImage(imageMokeponFire, 20, 40, 75, 50);
  touchKeyMap();
};
//*! === Events Btn Move === */
btnMoveMokepon.addEventListener("mouseover", () => {
  moveMokeponTravelRight();
});
btnMoveMokeponLeft.addEventListener("mouseover", () => {
  moveMokeponTravelLeft();
});
btnMoveMokeponTop.addEventListener("mouseover", () => {
  moveMokeponTravelTop();
});
btnMoveMokeponBottom.addEventListener("mouseover", () => {
  moveMokeponTravelBottom();
});
//*! === Event Btn Stop  === */
btnMoveMokepon.addEventListener("mouseup", () => {
  stopMoveMokepon();
});
btnMoveMokeponLeft.addEventListener("mouseup", () => {
  stopMoveMokepon();
});
btnMoveMokeponTop.addEventListener("mouseup", () => {
  stopMoveMokepon();
});
btnMoveMokeponBottom.addEventListener("mouseup", () => {
  stopMoveMokepon();
});

//*TODO ===> Event Key (keyup, keydown) ==> Teclado ===  */

//*! === Function Btn Mokepon ===  */
const moveMokeponTravelRight = () => {
  mokeponPlayerCanvas.fastX = 5;
  //drawMokepon();
};

const moveMokeponTravelLeft = () => {
  mokeponPlayerCanvas.fastX = -5;
  //drawMokepon();
};
const moveMokeponTravelTop = () => {
  mokeponPlayerCanvas.fastY = -5;
  //drawMokepon();
};
const moveMokeponTravelBottom = () => {
  mokeponPlayerCanvas.fastY = 5;
  //drawMokepon();
};
//*! === Stop Move Mokepon === */
const stopMoveMokepon = () => {
  mokeponPlayerCanvas.fastX = 0;
  mokeponPlayerCanvas.fastY = 0;
};

//*! === Load Window Key Touch MOve and Stop === */
const touchKeyMap = () => {
  map.width = 800;
  map.height = 400;
  mokeponPlayerCanvas = mokeponCanvas(nameMokeponPlayer);
  window.addEventListener("keydown", touchInitKey);
  window.addEventListener("keyup", stopMoveMokepon);
  interval = setInterval(drawMokepon, 50);
};

//*! Touch Init Key === */
const touchInitKey = (e) => {
  //console.log(e.key);
  if (e.key === "ArrowRight") {
    moveMokeponTravelRight();
  } else if (e.key === "ArrowLeft") {
    moveMokeponTravelLeft();
  } else if (e.key === "ArrowUp") {
    moveMokeponTravelTop();
  } else if (e.key === "ArrowDown") {
    moveMokeponTravelBottom();
  } else {
    console.log("Error Key");
  }
};

//*! === Call Select Mokepon Player In CANVAS === */
function mokeponCanvas() {
  /* myMokepons.forEach((mokepon) => {
    if (nameMokeponPlayer === mokepon.name) {
      return mokepon;
    }
  }); */

  for (let i = 0; i < myMokepons.length; i++) {
    if (nameMokeponPlayer === myMokepons[i].name) {
      return myMokepons[i];
    }
  }
}

//*! === Intersection Collision === */
//*? === Collision Option (A) === */
const collisionMokepon = () => {
  if (
    (mokeponPlayerCanvas.x + mokeponPlayerCanvas.width > monsterFiresEnemy.x &&
      mokeponPlayerCanvas.y + mokeponPlayerCanvas.y,
    mokeponPlayerCanvas.height > monsterFiresEnemy.y)
  ) {
    console.log("Collision With monsterFiresEnemy");
  } else if (
    mokeponPlayerCanvas.x + mokeponPlayerCanvas.width > waterBombsEnemy.x &&
    mokeponPlayerCanvas.y + mokeponPlayerCanvas.height > waterBombsEnemy.y
  ) {
    console.log("Collision With waterBombsEnemy");
  } else if (
    mokeponPlayerCanvas.x + mokeponPlayerCanvas.width > punchEarthsEnemy.x &&
    mokeponPlayerCanvas.y + mokeponPlayerCanvas.height > punchEarthsEnemy.y
  ) {
    console.log("Collision With punchEarthsEnemy");
  }
};

//*? === Collision Option (B) === */
function collisionAllMokepon(enemy) {
  const topEnemy = enemy.y;
  const downEnemy = enemy.y + enemy.height;
  const rightEnemy = enemy.x + enemy.width;
  const leftEnemy = enemy.x;

  const topUserMokepon = mokeponPlayerCanvas.y;
  const downUserMokepon = mokeponPlayerCanvas.y + mokeponPlayerCanvas.height;
  const rightUserMokepon = mokeponPlayerCanvas.x + mokeponPlayerCanvas.width;
  const leftUserMokepon = mokeponPlayerCanvas.x;

  if (
    downUserMokepon < topEnemy ||
    topUserMokepon > downEnemy ||
    rightUserMokepon < leftEnemy ||
    leftUserMokepon > rightEnemy
  ) {
    return;
  }
  stopMoveMokepon();
  console.log("Collision! With: " + " " + enemy.name);
}
