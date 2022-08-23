//** === Conditionals === */
import { fireAdd } from "./mokeponElements.js";
import { waterAdd } from "./mokeponElements.js";
import { earthAdd } from "./mokeponElements.js";
import { enemyOne } from "./mokeponElements.js";
import { enemyTwo } from "./mokeponElements.js";
import { enemyThree } from "./mokeponElements.js";
import { enemyRandomAttack } from "./mokeponAttack03.js";
//import { winnerBattle } from "./mokeponAttack03.js";
const monsterFire = document.querySelector(`#monsterFire`);
const waterBomb = document.querySelector(`#waterBomb`);
const punchEarth = document.querySelector("#punchEarth");

//*! === User*/
export const checkedAdd = () => {
  let playMonster = document.querySelector(`#playerMonster`); // Span del Player =

  if (monsterFire.checked) {
    alert(`Your Select: MonsterFire 🔥`);
    fireAdd();
    playMonster.innerHTML = "MonsterFire 🔥";
  } else if (waterBomb.checked) {
    alert(`Your Select: WaterBomb 💧`);
    waterAdd();
    playMonster.innerHTML = "WaterBomb 💧";
  } else if (punchEarth.checked) {
    alert(`Your Select: PunchEarth 🌍🦾`);
    earthAdd();
    playMonster.innerHTML = "PunchEarth 🦾🌍⚡";
  } else {
    alert("Sorry!! Your Not Select One. Please. select your Mokepon");
  }

  enemySelectAdd();
  //> Add Display Attack =>
  let sectionOneAttack = document.getElementById("secSelectAttack");
  sectionOneAttack.style.display = "flex";
  let attackImages = document.getElementById("secTwoAttack");
  attackImages.style.display = "flex";
  let idVersus = document.getElementById(`idVersus`);
  idVersus.style.display = "flex";
  let IdChildMonster = document.querySelector(`#IdChildMonster`);
  IdChildMonster.style.display = "flex";
  let idMonsterEnemy = document.querySelector(`#idMonsterEnemy`);
  idMonsterEnemy.style.display = "flex";
  let textAttack = document.querySelector(`#idTextAttack`);
  textAttack.style.display = "flex";
  let textAttackTwo = document.querySelector(`.textAttackTwo`);
  textAttackTwo.style.display = "flex";
};
//*! === Enemy */
const enemySelectAdd = () => {
  let enemyMonster = document.querySelector("#enemyMonster");
  let enemyAttack = random(1, 3);

  if (enemyAttack == 1) {
    enemyMonster.innerHTML = "ThunderLight ⚡";
    enemyTwo();
    enemyRandomAttack();
  } else if (enemyAttack == 2) {
    enemyMonster.innerHTML = "BombGreen 🌱";
    enemyOne();
    enemyRandomAttack();
  } else if (enemyAttack == 3) {
    enemyMonster.innerHTML = "CocoSmash 🥌";
    enemyThree();
    enemyRandomAttack();
  } else {
    alert("Sorry!! Please, select your Mokepon of Attack");
  }
};

//** === Random Function === */
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
