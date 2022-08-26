//** === Imports === */
/* import { enemyOne } from "./mokeponElements.js";
import { enemyTwo } from "./mokeponElements.js";
import { enemyThree } from "./mokeponElements.js";
import { enemyRandomAttack } from "./mokeponAttack03.js";
import { fireAttack } from "./mokeponAttack03.js";
import { waterAttack } from "./mokeponAttack03.js";
import { earthAttack } from "./mokeponAttack03.js"; */
//** === Call POO === */
import { monsterFires, myMokepons } from "./classMokepon.js";
//** === Call Btn === */
const btnSelectMascot = document.getElementById("IdBtnSelect");
const btnSelectYourMonster = document.getElementById(`idSelectMonster`);
//** === Variables => Do not Repeat Yourself ===  */
const monsterAdd = document.getElementById(`monsterAdd`);
const sectionOneAttack = document.getElementById("secSelectAttack");
const textAttack = document.querySelector(`#idTextAttack`);
const textAttackTwo = document.querySelector(`.textAttackTwo`);
const attackImages = document.getElementById("secTwoAttack");
//** === Checked & Select ===  */
/* const mokeponChecked = document.getElementById(`idMokeponChecked`); */
/* const btnFire = document.querySelector(`#btnMokeponFire`);
const btnWater = document.querySelector(`#btnMokeponWater`);
const btnEarth = document.querySelector(`#btnMokeponEarth`); */
const containerList = document.getElementById(`idMokeponList`);
//* ===  General Variable ===  */
let playMonster = document.querySelector(`#playerMonster`); // Span del Player =
let enemyMonster = document.querySelector("#enemyMonster");
let addMokepon;
let inputFire;
let inputWater;
let inputEarth;
let nameMokeponPlayer;
let allAttackMokepon;
//let enemyAttack = random(1, 3); //Random
let enemyAttack = random(0, myMokepons.length - 1); // POO => Mokepon

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
      nameMokeponPlayer = inputFire.id;
      extraAttacks();
    } else if (inputWater.checked) {
      playMonster.innerHTML = inputWater.id;
      nameMokeponPlayer = inputWater.id;
      extraAttacks();
    } else if (inputEarth.checked) {
      playMonster.innerHTML = inputEarth.id;
      nameMokeponPlayer = inputEarth.id;
      extraAttacks();
    } else {
      alert("Sorry!! Your Not Select One. Please. select your Mokepon");
    }
    btnSelectMascot.disabled = true;
    sectionOneAttack.style.display = "flex";
    textAttack.style.display = "flex";
    textAttackTwo.style.display = "flex";
    /* 
    idVersus.style.display = "flex";
    IdChildMonster.style.display = "flex";
    idMonsterEnemy.style.display = "flex";
     */
    enemySelectAdd();
  });
};

/* checkedMokepon(); */
//*! === Enemy select Attack and Mokepon === */
const enemySelectAdd = () => {
  enemyMonster.innerHTML = myMokepons[enemyAttack].name;
};

//*! === Attacka Player === */
function extraAttacks() {
  let powerAttack;
  myMokepons.forEach((mokepon) => {
    if (nameMokeponPlayer === mokepon.name) {
      powerAttack = mokepon.attack;
    } else {
      console.log("We have Error!");
    }

    //console.log(powerAttack);
  });
  allAttacks(powerAttack);
}
function allAttacks(powerAttack) {
  powerAttack.forEach((attack) => {
    allAttackMokepon = `
    <button id=${attack.id} class="btn btnMokepon">
            <p class="textMokepon">${attack.name}</p>
    </button>
    `;

    containerList.innerHTML += allAttackMokepon;
  });
}

//** === Random Function === */
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
