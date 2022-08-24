//** === Prove POO (Programming Oriented Object) === */

//*! === Variable Mokepon === */
export let myMokepons = [];

//*! === Class === */
class Mokepon {
  constructor(name, image, life, power) {
    this.name = name;
    this.image = image;
    this.life = life;
    this.power = power;
    this.attack = [];
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
  `https://images.saymedia-content.com/.image/t_share/MTc0NDU3NjUyNjc0NzY2NDcw/worst-pokemon-attacks-of-all-time.png`,
  3,
  60
);
export let punchEarths = new Mokepon(
  `PunchEarth`,
  "https://dam.smashmexico.com.mx/wp-content/uploads/2017/09/03144141/trend-una-arana-con-la-forma-de-pikachu-si-existe-cover.jpg",
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
//*! === Var General */
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
