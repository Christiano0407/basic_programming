//** === Imports === */
import { enemyOne } from "./mokeponElements.js";
import { enemyTwo } from "./mokeponElements.js";
import { enemyThree } from "./mokeponElements.js";
import { enemyRandomAttack } from "./mokeponAttack03.js";
import { fireAttack } from "./mokeponAttack03.js";
import { waterAttack } from "./mokeponAttack03.js";
import { earthAttack } from "./mokeponAttack03.js";
//** === Call POO === */
import { myMokepons } from "./classMokepon.js";
//** === Call Btn === */
const btnSelectYourMonster = document.getElementById(`idSelectMonster`);
const btnWater = document.querySelector(`#btnMokeponWater`);
const btnEarth = document.querySelector(`#btnMokeponEarth`);
//** === Variables => Do not Repeat Yourself ===  */
const monsterAdd = document.getElementById(`monsterAdd`);
const sectionOneAttack = document.getElementById("secSelectAttack");
const textAttack = document.querySelector(`#idTextAttack`);
const textAttackTwo = document.querySelector(`.textAttackTwo`);
//** === Checked & Select ===  */
/* const mokeponChecked = document.getElementById(`idMokeponChecked`); */
const btnFire = document.querySelector(`#btnMokeponFire`);
//* ===  General Variable ===  */
let playMonster = document.querySelector(`#playerMonster`); // Span del Player =
let enemyMonster = document.querySelector("#enemyMonster");
let enemyAttack = random(1, 3);
let addMokepon;
let inputFire;
let inputWater;
let inputEarth;

//*! === User*/
export const checkedAdd = () => {
  myMokepons.forEach((mokepon) => {
    addMokepon = `
          <input type="radio" name="mascot" class="mokepon-Checked" id=${mokepon.name} />
    <label class="mokepon-card" id="idMokeponCard" for=${mokepon.name}>
          <img class="monsterFire-img" src=${mokepon.image} alt=${mokepon.name}>
          <p class="label-text">${mokepon.name}</p>
    </label>
     `;
    //> DOM ===
    monsterAdd.innerHTML += addMokepon;
  });
  checkedMokepon();
  btnSelectYourMonster.style.display = "flex";
};
//*! === Select my Mokepon === */
const checkedMokepon = () => {
  //> === id POO === <
  inputFire = document.getElementById(`MonsterFire`);
  inputWater = document.getElementById(`WaterBomb`);
  inputEarth = document.getElementById(`PunchEarth`);
  btnSelectYourMonster.addEventListener("click", () => {
    if (inputFire.checked) {
      playMonster.innerHTML = inputFire.id;
      btnFire.addEventListener("click", fireAttack);
    } else if (inputWater.checked) {
      playMonster.innerHTML = inputWater.id;
      btnWater.addEventListener("click", waterAttack);
    } else if (inputEarth.checked) {
      playMonster.innerHTML = inputEarth.id;
      btnEarth.addEventListener("click", earthAttack);
    } else {
      alert("Sorry!! Your Not Select One. Please. select your Mokepon");
    }
    sectionOneAttack.style.display = "flex";
    textAttack.style.display = "flex";
    textAttackTwo.style.display = "flex";
    /* attackImages.style.display = "flex";
    idVersus.style.display = "flex";
    IdChildMonster.style.display = "flex";
    idMonsterEnemy.style.display = "flex";
     */
  });
};

/* checkedMokepon(); */
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
