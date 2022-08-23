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
monsterPower.attack.push({
  name: "FireAttack",
  power: 50,
  level: 2,
});

myMokepons.push(monsterPower, waterBombs, punchEarths);

//*! === CALL */
console.log(monsterPower);
//console.log(monsterPower.name);
console.log(waterBombs);
console.log(punchEarths);
console.log(myMokepons);
//console.log(myMokepons[0]);
