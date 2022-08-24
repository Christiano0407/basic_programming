//** === Imports === */
import { fireAdd } from "./mokeponElements.js";
import { waterAdd } from "./mokeponElements.js";
import { earthAdd } from "./mokeponElements.js";
import { enemyOne } from "./mokeponElements.js";
import { enemyTwo } from "./mokeponElements.js";
import { enemyThree } from "./mokeponElements.js";
import { enemyRandomAttack } from "./mokeponAttack03.js";
//** === Call POO === */
import { myMokepons } from "./classMokepon.js";
import { monsterFires } from "./classMokepon.js";
import { waterBombs } from "./classMokepon.js";
import { punchEarths } from "./classMokepon.js";
//** === Variables => Do not Repeat Yourself ===  */
const monsterAdd = document.getElementById(`monsterAdd`);
//** === Checked & Select ===  */
const mokeponChecked = document.getElementById(`idMokeponChecked`);
//* ===  General Variable ===  */
let playMonster = document.querySelector(`#playerMonster`); // Span del Player =
let enemyMonster = document.querySelector("#enemyMonster");
let enemyAttack = random(1, 3);
let addMokepon;

//*! === User*/
export const checkedAdd = () => {
  myMokepons.forEach((mokepon) => {
    addMokepon += `
        <label for="${mokepon.name}">
              <input type="radio" name="mascot" class="mokepon-Checked" id="idMokeponChecked" />
              <img class="monsterFire-img" src="${mokepon.image}" alt="${mokepon.name}">
              <p class="label-text">${mokepon.name}</p>
        </label>
     `;
  });
  monsterAdd.innerHTML = addMokepon;
};

/* export const checkedAdd = () => {
  if (monsterFire.checked) {
     alert(`Your Select: MonsterFire 🔥`);
    fireAdd();
    playMonster.innerHTML = "MonsterFire 🔥";
    console.log(myMokepons[0].life);
    monsterFire.innerHTML = myMokepons[0].life;
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
  
  sectionOneAttack.style.display = "flex";
  attackImages.style.display = "flex";
  idVersus.style.display = "flex";
  IdChildMonster.style.display = "flex";
  idMonsterEnemy.style.display = "flex";
  textAttack.style.display = "flex";
  textAttackTwo.style.display = "flex";
}; */
//*! === Enemy */
const enemySelectAdd = () => {
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
