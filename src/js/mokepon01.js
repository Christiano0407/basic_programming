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
const btnSelectYourMonster = document.getElementById(`idSelectMonster`);
//** === Variables => Do not Repeat Yourself ===  */
const monsterAdd = document.getElementById(`monsterAdd`);
const sectionOneAttack = document.getElementById("secSelectAttack");
//** === Checked & Select ===  */
/* const mokeponChecked = document.getElementById(`idMokeponChecked`); */
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

const checkedMokepon = () => {
  //> === id POO === <
  inputFire = document.getElementById(`MonsterFire`);
  inputWater = document.getElementById(`WaterBomb`);
  inputEarth = document.getElementById(`PunchEarth`);
  btnSelectYourMonster.addEventListener("click", () => {
    if (inputFire.checked) {
      alert(`Your Select: MonsterFire 🔥`);
      //fireAdd();
      //playMonster.innerHTML = "MonsterFire 🔥";
      //console.log(myMokepons[0].life);
      //monsterFire.innerHTML = myMokepons[0].life;
    } else if (inputWater.checked) {
      alert(`Your Select: WaterBomb 💧`);
      //waterAdd();
      //playMonster.innerHTML = "WaterBomb 💧";
    } else if (inputEarth.checked) {
      alert(`Your Select: PunchEarth 🌍🦾`);
      //earthAdd();
      //playMonster.innerHTML = "PunchEarth 🦾🌍⚡";
    } else {
      alert("Sorry!! Your Not Select One. Please. select your Mokepon");
    }
    sectionOneAttack.style.display = "flex";
    /* attackImages.style.display = "flex";
    idVersus.style.display = "flex";
    IdChildMonster.style.display = "flex";
    idMonsterEnemy.style.display = "flex";
    textAttack.style.display = "flex";
    textAttackTwo.style.display = "flex"; */
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
