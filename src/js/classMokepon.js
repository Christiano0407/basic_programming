//** === Prove POO (Programming Oriented Object) === */

//*! === Variable Mokepon === */
let myMokepons = [];

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

let monsterPower = new Mokepon(
  `MonsterFire`,
  `https://media.redadn.es/imagenes/pokemaster_338177_pn2.jpg`,
  3,
  65
);

let waterBombs = new Mokepon(
  `WaterBomb`,
  `https://alfabetajuega.com/hero/2019/03/Squirtle-Looking-Happy.jpg?width=1200&aspect_ratio=1200:631`,
  3,
  60
);
let punchEarths = new Mokepon(
  `PunchEarth`,
  `https://dam.smashmexico.com.mx/wp-content/uploads/2017/09/03144141/trend-una-arana-con-la-forma-de-pikachu-si-existe-cover.jpg`,
  3,
  70
);
//*! === Call My Mokepons => Methods === */
monsterPower.attack.push(
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
myMokepons.push(monsterPower, waterBombs, punchEarths);

//*! === CALL */
console.log(monsterPower);
console.log(monsterPower.attack);
console.log(waterBombs);
console.log(punchEarths);
console.log(myMokepons);
//console.log(myMokepons[0]);
